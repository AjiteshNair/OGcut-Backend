import { Injectable, NotFoundException } from '@nestjs/common';
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

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(category?: string): Promise<ProductResponse[] | null> {
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
      images: product.images.map((img) => img.imgurl), // Maps all fetched images to strings
    }));
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

    // Map directly to a sorted array of URL strings
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
}