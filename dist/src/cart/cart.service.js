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
var CartService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = exports.CustomizationPayload = exports.CustomizationPlacementDto = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const storage_service_1 = require("../storage/storage.service");
class CustomizationPlacementDto {
    zone;
    image;
    coordinates;
    printZoneBounds;
}
exports.CustomizationPlacementDto = CustomizationPlacementDto;
class CustomizationPayload {
    fabricColor;
    userId;
    productId;
    address;
    unitPrice;
    size;
    placements;
}
exports.CustomizationPayload = CustomizationPayload;
let CartService = CartService_1 = class CartService {
    storageService;
    prisma;
    logger = new common_1.Logger(CartService_1.name);
    constructor(storageService, prisma) {
        this.storageService = storageService;
        this.prisma = prisma;
    }
    async getAdminOrders(page = 1, limit = 20) {
        const skip = (page - 1) * limit;
        const [orders, totalCount] = await Promise.all([
            this.prisma.order.findMany({
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
                include: {
                    user: {
                        select: {
                            id: true,
                            email: true,
                            firstName: true,
                            lastName: true,
                        },
                    },
                    items: {
                        include: {
                            product: true,
                            placements: true,
                        },
                    },
                },
            }),
            this.prisma.order.count(),
        ]);
        return {
            orders,
            pagination: {
                total: totalCount,
                page,
                limit,
                totalPages: Math.ceil(totalCount / limit),
            },
        };
    }
    async getAdminOrderById(id) {
        const order = await this.prisma.order.findUnique({
            where: { id },
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        firstName: true,
                        lastName: true,
                    },
                },
                items: {
                    include: {
                        product: true,
                        placements: true,
                    },
                },
            },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        return order;
    }
    async updateOrderStatus(id, status) {
        const order = await this.prisma.order.findUnique({ where: { id } });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        return this.prisma.order.update({
            where: { id },
            data: { status },
        });
    }
    async processAndSaveOrder(payload) {
        const { placements, userId, productId, address, unitPrice = 0, size = 'M', } = payload;
        if (!placements || placements.length === 0) {
            throw new common_1.BadRequestException('At least one design placement is required.');
        }
        this.logger.log(`Processing order with ${placements.length} placement(s)...`);
        const placementData = await Promise.all(placements.map(async (placement, index) => {
            if (!placement.image) {
                throw new common_1.BadRequestException(`Missing base64 image string in placement index ${index}`);
            }
            const fileName = `custom-${placement.zone}-${Date.now()}-${index}.png`;
            this.logger.log(`Uploading ${placement.zone} image to Storage: ${fileName}`);
            const imageUrl = await this.storageService.uploadBase64Image(placement.image, 'shirt-designs', `custom-orders/${fileName}`);
            const coords = placement.coordinates || {};
            const zoneKey = placement.zone.toLowerCase();
            const validZone = Object.values(client_1.PlacementZone).includes(zoneKey)
                ? zoneKey
                : client_1.PlacementZone.front;
            return {
                place: validZone,
                imgurl: imageUrl,
                xvalue: Number(coords.x || 0),
                yvalue: Number(coords.y || 0),
                zoom: Number(coords.scale || 1.0),
                width: coords.width ? Number(coords.width) : null,
                height: coords.height ? Number(coords.height) : null,
            };
        }));
        const orderCode = `ORD-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        const newOrder = await this.prisma.order.create({
            data: {
                orderCode,
                uid: userId,
                address: address ?? {},
                status: client_1.OrderStatus.PENDING,
                totalAmount: unitPrice,
                items: {
                    create: [
                        {
                            pid: productId,
                            quantity: 1,
                            size: size,
                            unitPrice: unitPrice,
                            placements: {
                                create: placementData,
                            },
                        },
                    ],
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
        this.logger.log(`Unified Order successfully created with ID: ${newOrder.id}`);
        return newOrder;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = CartService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [storage_service_1.StorageService,
        prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map