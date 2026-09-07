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
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(category?: string): Promise<ProductResponse[] | null>;
    findPricesByIds(ids: number[]): Promise<Record<number, number>>;
    findOne(id: number): Promise<ProductResponse>;
}
