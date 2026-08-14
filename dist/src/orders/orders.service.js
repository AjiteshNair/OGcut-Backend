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
const prisma_service_1 = require("../prisma/prisma.service");
let OrdersService = class OrdersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createOrder(userId, dto) {
        if (!dto.items || dto.items.length === 0) {
            throw new common_1.BadRequestException('Order must contain at least one item');
        }
        const address = await this.prisma.address.findFirst({
            where: { id: dto.addressId, userId },
        });
        if (!address) {
            throw new common_1.NotFoundException('Selected shipping address was not found');
        }
        const totalAmount = dto.items.reduce((sum, item) => {
            return sum + item.unitPrice * item.quantity;
        }, 0);
        return this.prisma.$transaction(async (tx) => {
            const order = await tx.order.create({
                data: {
                    userId,
                    addressId: address.id,
                    totalAmount,
                    status: 'RECEIVED',
                    paymentStatus: 'PAID',
                },
            });
            for (const item of dto.items) {
                let customShirtOrderId = undefined;
                if (item.customShirtOrder) {
                    const createdCustomShirt = await tx.customShirtOrder.create({
                        data: {
                            fabricColor: item.customShirtOrder.fabricColor,
                            placements: {
                                create: item.customShirtOrder.placements.map((p) => ({
                                    zone: p.zone,
                                    imageUrl: p.imageUrl,
                                    x: p.x,
                                    y: p.y,
                                    scale: p.scale,
                                    width: p.width,
                                    height: p.height,
                                    centerX: p.centerX,
                                    centerY: p.centerY,
                                    clipWidth: p.clipWidth,
                                    clipHeight: p.clipHeight,
                                })),
                            },
                        },
                    });
                    customShirtOrderId = createdCustomShirt.id;
                }
                await tx.orderItem.create({
                    data: {
                        orderId: order.id,
                        productId: item.productId ?? null,
                        designId: item.designId ?? null,
                        customShirtOrderId: customShirtOrderId ?? null,
                        quantity: item.quantity,
                        size: item.size ?? null,
                        unitPrice: item.unitPrice,
                    },
                });
            }
            return tx.order.findUnique({
                where: { id: order.id },
                include: {
                    address: true,
                    items: {
                        include: {
                            product: true,
                            design: true,
                            customShirtOrder: {
                                include: {
                                    placements: true,
                                },
                            },
                        },
                    },
                },
            });
        });
    }
    async getUserOrders(userId) {
        return this.prisma.order.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            include: {
                address: true,
                items: {
                    include: {
                        product: true,
                        design: true,
                        customShirtOrder: {
                            include: {
                                placements: true,
                            },
                        },
                    },
                },
            },
        });
    }
    async getOrderById(userId, orderId) {
        const order = await this.prisma.order.findFirst({
            where: { id: orderId, userId },
            include: {
                address: true,
                items: {
                    include: {
                        product: true,
                        design: true,
                        customShirtOrder: {
                            include: {
                                placements: true,
                            },
                        },
                    },
                },
            },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        return order;
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map