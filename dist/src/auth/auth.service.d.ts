import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            first_name: string;
            last_name: string | null;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
    validateOAuthUser(details: {
        email: string;
        first_name: string;
        last_name?: string;
    }): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            first_name: string;
            last_name: string | null;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            first_name: string;
            last_name: string | null;
            role: import("@prisma/client").$Enums.Role;
        };
    }>;
    private generateAuthResult;
}
