import { Controller, Post, Body, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  // @Get('google')
  // @UseGuards(AuthGuard('google'))
  // async googleAuth() {
  //   // Initiates Google OAuth redirect flow
  // }

  // @Get('google/callback')
  // @UseGuards(AuthGuard('google'))
  // async googleAuthRedirect(@Req() req: any, @Res() res: Response) {
  //   const result = await this.authService.validateOAuthUser(req.user);
  //   // Redirect or return token
  //   return res.json(result);
  // }

  // @Get('facebook')
  // @UseGuards(AuthGuard('facebook'))
  // async facebookAuth() {
  //   // Initiates Facebook OAuth redirect flow
  // }

  // @Get('facebook/callback')
  // @UseGuards(AuthGuard('facebook'))
  // async facebookAuthRedirect(@Req() req: any, @Res() res: Response) {
  //   const result = await this.authService.validateOAuthUser(req.user);
  //   return res.json(result);
  // }
}