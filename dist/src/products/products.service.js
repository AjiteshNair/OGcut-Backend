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
            where: {
                isActive: true,
                type: 'STANDARD'
            },
            include: {
                images: {
                    orderBy: {
                        sortWeight: 'asc',
                    },
                },
            },
            orderBy: {
                id: 'asc',
            },
        });
        if (!products || products.length === 0) {
            return null;
        }
        return products.map((product) => ({
            id: product.id,
            name: product.name,
            desc: product.desc,
            price: Number(product.price),
            type: product.type,
            isActive: product.isActive,
            images: product.images.map((img) => img.imgurl),
        }));
    }
    async findPricesByIds(ids) {
        if (ids.length === 0)
            return {};
        const products = await this.prisma.product.findMany({
            where: {
                id: { in: ids },
                isActive: true,
            },
            select: {
                id: true,
                price: true,
            },
        });
        return products.reduce((acc, product) => {
            acc[product.id] = Number(product.price);
            return acc;
        }, {});
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: {
                images: {
                    orderBy: {
                        sortWeight: 'asc',
                    },
                },
            },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        const imageUrls = product.images.map((img) => img.imgurl);
        return {
            id: product.id,
            name: product.name,
            desc: product.desc,
            price: Number(product.price),
            type: product.type,
            isActive: product.isActive,
            images: imageUrls,
        };
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map