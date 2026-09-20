// src/auth/guards/admin.guard.ts

import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import type { AuthenticatedRequest } from '../types/authenticated-request';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const user = request.user; // Populated by JwtStrategy

    if (!user || user.role !== 'ADMIN') {
      throw new ForbiddenException('Access denied. Admin privileges required.');
    }

    return true;
  }
}