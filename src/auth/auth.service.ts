import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash: hashedPassword,
        firstName: dto.first_name,
        lastName: dto.last_name ?? null, // Store null if last_name is undefined
      },
    });

    return this.generateAuthResult(user);
  }

  async validateOAuthUser(details: { email: string; first_name: string; last_name?: string }) {
    // Atomic upsert prevents race conditions on duplicate OAuth logins
    const user = await this.prisma.user.upsert({
      where: { email: details.email },
      update: {}, // No updates needed if user exists
      create: {
        email: details.email,
        firstName: details.first_name || 'User',
        lastName: details.last_name ?? null,
        passwordHash: '',
      },
    });

    return this.generateAuthResult(user);
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return this.generateAuthResult(user);
  }

  // Helper method to keep responses consistent and DRY
  private async generateAuthResult(user: User) {
    const payload = { sub: user.id, email: user.email, role: user.role };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        first_name: user.firstName,
        last_name: user.lastName,
        role: user.role,
      },
    };
  }
}