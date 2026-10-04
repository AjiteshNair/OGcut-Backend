import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

export interface ProductResponse {
  id: number;
  name: string;
  desc: string;
  price: number;
  type: string;
  isActive: boolean;
  images: string[];
}

type ProductWithImages = Prisma.ProductGetPayload<{ include: { images: true } }>;

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  private toProductResponse(product: ProductWithImages): ProductResponse {
    return {
      id: product.id,
      name: product.name,
      desc: product.desc,
      price: Number(product.price),
      type: product.type,
      isActive: product.isActive,
      images: product.images.map((img) => img.imgurl),
    };
  }

  async findAll(category?: string): Promise<ProductResponse[]> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
        type: 'STANDARD'
      },
      include: {
        images: {
          orderBy: {
            sortWeight: 'asc', // Keeps them in the correct custom order for cycling
          },
        },
      },
      orderBy: {
        id: 'asc',
      },
    });

    return products.map((product) => this.toProductResponse(product));
  }

  async findPricesByIds(ids: number[]): Promise<Record<number, number>> {
    if (ids.length === 0) return {};

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
      // Prisma Decimal type converted to JS number
      acc[product.id] = Number(product.price);
      return acc;
    }, {} as Record<number, number>);
  }

  async findOne(id: number): Promise<ProductResponse> {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        images: {
          orderBy: {
            sortWeight: 'asc', // DB-level sorting ensures correct sequence
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.toProductResponse(product);
  }
}