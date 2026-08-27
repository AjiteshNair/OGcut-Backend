import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUserProfile(userId: number): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
}
