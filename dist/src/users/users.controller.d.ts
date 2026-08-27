import { UsersService } from './users.service';
export interface AuthenticatedRequest extends Request {
    user: {
        userId: number;
        email: string;
        role: string;
    };
}
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getProfile(req: AuthenticatedRequest): Promise<{
        id: number;
        email: string;
        firstName: string;
        lastName: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
    }>;
}
