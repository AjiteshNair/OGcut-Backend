"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const prisma_service_1 = require("../prisma/prisma.service");
let OrdersService = class OrdersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createOrder(userId, dto) {
        console.log(">>>>>>>>>>>>>>>>>>", dto);
        const address = await this.prisma.address.findFirst({
            where: {
                id: dto.addressId,
                uid: userId,
            },
        });
        if (!address) {
            throw new common_1.NotFoundException('Address not found or does not belong to user');
        }
        const productIds = dto.items.map((item) => item.productId);
        const products = await this.prisma.product.findMany({
            where: {
                id: { in: productIds },
                isActive: true,
            },
        });
        const productMap = new Map(products.map((p) => [p.id, p]));
        for (const item of dto.items) {
            if (!productMap.has(item.productId)) {
                throw new common_1.BadRequestException(`Product with ID ${item.productId} is invalid or inactive`);
            }
        }
        let calculatedTotal = 0;
        const itemsToCreate = dto.items.map((item) => {
            const product = productMap.get(item.productId);
            const unitPrice = product.price;
            const lineTotal = Number(unitPrice) * item.quantity;
            calculatedTotal += lineTotal;
            return {
                pid: item.productId,
                quantity: item.quantity,
                size: item.size,
                color: item.color || null,
                unitPrice: unitPrice,
                ...(item.placements && item.placements.length > 0
                    ? {
                        placements: {
                            create: item.placements.map((p) => ({
                                place: p.place,
                                imgurl: p.imgurl,
                                xvalue: p.xvalue,
                                yvalue: p.yvalue,
                                zoom: p.zoom ?? 1.0,
                                height: p.height ?? null,
                                width: p.width ?? null,
                            })),
                        },
                    }
                    : {}),
            };
        });
        const todayStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const randomHex = (0, crypto_1.randomBytes)(3).toString('hex').toUpperCase();
        const orderCode = `ORD-${todayStr}-${randomHex}`;
        const newOrder = await this.prisma.order.create({
            data: {
                orderCode,
                uid: userId,
                address: {
                    id: address.id,
                    label: address.label,
                    fullName: address.fullName,
                    line1: address.line1,
                    line2: address.line2,
                    city: address.city,
                    state: address.state,
                    pincode: address.pincode,
                    phone: address.phone,
                },
                coupon: dto.coupon || null,
                status: 'PENDING',
                paymentStatus: 'UNPAID',
                totalAmount: calculatedTotal,
                items: {
                    create: itemsToCreate,
                },
            },
            include: {
                items: {
                    include: {
                        placements: true,
                    },
                },
            },
        });
        return {
            message: 'Order created successfully',
            order: newOrder,
        };
    }
    async findAllForAdmin() {
        const orders = await this.prisma.order.findMany({
            orderBy: { createdAt: 'desc' },
            include: {
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        phone: true,
                    },
                },
                items: {
                    include: {
                        product: {
                            select: {
                                id: true,
                                name: true,
                                type: true,
                            },
                        },
                        placements: true,
                    },
                },
            },
        });
        return {
            success: true,
            data: orders.map((order) => ({
                ...order,
                totalAmount: Number(order.totalAmount),
                items: order.items.map((item) => ({
                    ...item,
                    unitPrice: Number(item.unitPrice),
                })),
            })),
        };
    }
    async findAdminOrderById(orderId) {
        const numericId = parseInt(orderId, 10);
        if (isNaN(numericId)) {
            throw new common_1.BadRequestException('Invalid order ID provided');
        }
        const order = await this.prisma.order.findUnique({
            where: { id: numericId },
            include: {
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                        phone: true,
                    },
                },
                items: {
                    include: {
                        product: {
                            select: {
                                id: true,
                                name: true,
                                type: true,
                            },
                        },
                        placements: true,
                    },
                },
            },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${orderId} not found`);
        }
        return {
            success: true,
            data: {
                ...order,
                totalAmount: Number(order.totalAmount),
                items: order.items.map((item) => ({
                    ...item,
                    unitPrice: Number(item.unitPrice),
                })),
            },
        };
    }
    async updateOrderStatus(orderId, dto) {
        const numericId = parseInt(orderId, 10);
        if (isNaN(numericId)) {
            throw new common_1.BadRequestException('Invalid order ID provided');
        }
        if (dto.status === undefined && dto.trackingNumber === undefined) {
            throw new common_1.BadRequestException('At least status or trackingNumber must be provided');
        }
        const existingOrder = await this.prisma.order.findUnique({
            where: { id: numericId },
        });
        if (!existingOrder) {
            throw new common_1.NotFoundException(`Order with ID ${orderId} not found`);
        }
        const updatedOrder = await this.prisma.order.update({
            where: { id: numericId },
            data: {
                ...(dto.status !== undefined && { status: dto.status }),
                ...(dto.trackingNumber !== undefined && { trackingNumber: dto.trackingNumber }),
            },
            select: {
                id: true,
                orderCode: true,
                status: true,
                trackingNumber: true,
            },
        });
        return {
            success: true,
            data: updatedOrder,
        };
    }
    async getUserOrders(userId) {
        console.log('inside getUserOrders');
    }
    async getOrderById(userId, identifier) {
        const parsedId = parseInt(identifier, 10);
        const isNumeric = !isNaN(parsedId);
        const order = await this.prisma.order.findFirst({
            where: {
                uid: userId,
                OR: [
                    ...(isNumeric ? [{ id: parsedId }] : []),
                    { orderCode: identifier },
                ],
            },
            include: {
                items: {
                    include: {
                        product: {
                            include: { images: { take: 1 } },
                        },
                        placements: true,
                    },
                },
            },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found or access denied');
        }
        return { message: 'Order fetched successfully', order };
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map