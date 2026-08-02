import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    // req.user contains { userId, email, role } from JwtStrategy.validate()
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Post('saved-designs/toggle')
  toggleSaveDesign(
    @Request() req: any,
    @Body('productId') productId: number,
  ) {
    return this.usersService.toggleSaveDesign(req.user.userId, productId);
  }
}