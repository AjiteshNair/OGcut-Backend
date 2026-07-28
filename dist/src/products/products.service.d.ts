import 'dotenv/config';
import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
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
export declare class ProductsService implements OnModuleInit, OnModuleDestroy {
    private prisma;
    constructor();
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    findAll(category?: string): Promise<ProductResponse[]>;
    findOne(id: string): Promise<ProductResponse | null>;
}
