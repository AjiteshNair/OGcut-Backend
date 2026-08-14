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
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(category?: string): Promise<ProductResponse[]>;
    findOne(id: number): Promise<ProductResponse | null>;
}
