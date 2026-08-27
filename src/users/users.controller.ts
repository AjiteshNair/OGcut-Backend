import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';

export interface AuthenticatedRequest extends Request {
  user: {
    userId: number;
    email: string;
    role: string;
  };
}

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get current logged-in user details' })
  getProfile(@Req() req: AuthenticatedRequest) {
    return this.usersService.getUserProfile(req.user.userId);
  }
}