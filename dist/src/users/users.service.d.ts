import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    toggleSaveDesign(userId: string, productId: number): Promise<{
        saved: boolean;
    }>;
    getSavedDesigns(userId: string): Promise<({
        product: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            price: import("@prisma/client-runtime-utils").Decimal;
            images: string[];
            inventory: number;
            designType: string;
            graphicUrl: string | null;
            mockupUrl: string | null;
            targetZone: string;
            categoryId: number;
        };
    } & {
        id: string;
        created_at: Date;
        user_id: string;
        product_id: number;
    })[]>;
}
