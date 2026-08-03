import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            first_name: string | null;
            last_name: string | null;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
            first_name: string | null;
            last_name: string | null;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
    googleAuth(): Promise<void>;
    googleAuthRedirect(req: Request, res: Response): Promise<void>;
    facebookAuth(): Promise<void>;
    facebookAuthRedirect(req: Request, res: Response): Promise<void>;
}
