import { UsersService } from './users.service';
import type { RequestUser } from '../auth/types/authenticated-request';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getProfile(user: RequestUser): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
}
