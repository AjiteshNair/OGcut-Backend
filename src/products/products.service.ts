import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ProductResponse {
  id: number;
  name: string;
  desc: string;
  price: number;
  type: string;
  isActive: boolean;
  image: string | null;
}

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(category?: string): Promise<ProductResponse[] | null> {
    const products = await this.prisma.product.findMany({
      where: {
        isActive: true,
      },
      include: {
        images: {
          where: {
            sortWeight: 0,
          },
          take: 1,
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
      image: product.images.length > 0 ? product.images[0].imgurl : null,
    }));
  }

  async findOne(id: number): Promise<ProductResponse | null> {
    console.log('inside findOne')
    return null;
  }
}