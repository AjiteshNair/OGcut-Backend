import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export type ProductResponse = {
  id: string;
  name: string;
  base_price: number;
  category: string;
  tagline: string;
  design_type: string;
  graphic_url: string | null;
  mockup_url: string | null;
  target_zone: string;
};

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(category?: string): Promise<ProductResponse[]> {
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

  async findOne(id: number): Promise<ProductResponse | null> {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!product) return null;

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
}