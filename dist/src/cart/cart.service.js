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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const storage_service_1 = require("../storage/storage.service");
const prisma_service_1 = require("../prisma/prisma.service");
let CartService = CartService_1 = class CartService {
    storageService;
    prisma;
    logger = new common_1.Logger(CartService_1.name);
    constructor(storageService, prisma) {
        this.storageService = storageService;
        this.prisma = prisma;
    }
    async processAndSaveOrder(payload) {
        const { fabricColor, placements } = payload;
        if (!placements || placements.length === 0) {
            throw new common_1.BadRequestException('At least one design placement is required.');
        }
        this.logger.log(`Processing order with ${placements.length} placement(s)...`);
        const placementData = await Promise.all(placements.map(async (placement, index) => {
            let imageUrl = '';
            if (placement.image) {
                const fileName = `custom-${placement.zone}-${Date.now()}-${index}.png`;
                this.logger.log(`Uploading ${placement.zone} image to Supabase: ${fileName}`);
                imageUrl = await this.storageService.uploadBase64Image(placement.image, 'shirt-designs', `custom-orders/${fileName}`);
                this.logger.log(`Uploaded ${placement.zone} URL: ${imageUrl}`);
            }
            else {
                throw new common_1.BadRequestException(`Missing base64 image string in placement index ${index}`);
            }
            const coords = placement.coordinates || {};
            const bounds = placement.printZoneBounds || {};
            return {
                zone: placement.zone || 'front',
                imageUrl: imageUrl,
                x: Number(coords.x || 0),
                y: Number(coords.y || 0),
                scale: Number(coords.scale || 1),
                width: Number(coords.width || 0),
                height: Number(coords.height || 0),
                centerX: Number(bounds.centerX || 0),
                centerY: Number(bounds.centerY || 0),
                clipWidth: Number(bounds.clipWidth || 0),
                clipHeight: Number(bounds.clipHeight || 0),
            };
        }));
        const customOrder = await this.prisma.customShirtOrder.create({
            data: {
                fabricColor: fabricColor || 'white',
                placements: {
                    create: placementData,
                },
            },
            include: {
                placements: true,
            },
        });
        this.logger.log(`Custom order successfully created with ID: ${customOrder.id}`);
        return customOrder;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = CartService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [storage_service_1.StorageService,
        prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map