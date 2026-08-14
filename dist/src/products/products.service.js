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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(category) {
        const products = await this.prisma.product.findMany({
            where: category
                ? {
                    category: {
                        name: {
                            equals: category,
                            mode: 'insensitive',
                        },
                    },
                }
                : undefined,
            include: {
                category: true,
            },
        });
        return products.map((product) => ({
            id: String(product.id),
            name: product.name,
            base_price: Number(product.price),
            category: product.category.name,
            tagline: product.description,
            design_type: product.designType || 'graphic_only',
            graphic_url: product.graphicUrl || (product.images[0] ?? null),
            mockup_url: product.mockupUrl || (product.images[0] ?? null),
            target_zone: product.targetZone || 'front',
        }));
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: { category: true },
        });
        if (!product)
            return null;
        return {
            id: String(product.id),
            name: product.name,
            base_price: Number(product.price),
            category: product.category.name,
            tagline: product.description,
            design_type: product.designType || 'graphic_only',
            graphic_url: product.graphicUrl || (product.images[0] ?? null),
            mockup_url: product.mockupUrl || (product.images[0] ?? null),
            target_zone: product.targetZone || 'front',
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map