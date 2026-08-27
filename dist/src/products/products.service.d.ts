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
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(category?: string): Promise<ProductResponse[] | null>;
    findOne(id: number): Promise<ProductResponse | null>;
}
