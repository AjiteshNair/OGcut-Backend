import 'dotenv/config';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// Import from your generated folder, NOT '@prisma/client'
import { PrismaClient } from '../generated/prisma/client'; 
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

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
export class ProductsService implements OnModuleInit, OnModuleDestroy {
  private prisma: PrismaClient;

  constructor() {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error('DATABASE_URL environment variable is missing in .env file!');
    }

    const pool = new Pool({ connectionString });
    const adapter = new PrismaPg(pool);

    this.prisma = new PrismaClient({ adapter });
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

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

  async findOne(id: string): Promise<ProductResponse | null> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) return null;

    const product = await this.prisma.product.findUnique({
      where: { id: numericId },
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