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

  // --- Google OAuth ---
  // Hitting this route (a real browser navigation, not an AJAX call) kicks
  // off the redirect to Google's consent screen. AuthGuard('google') does
  // that redirect for us before this method body ever runs.
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  // Google redirects back here with the user's profile already attached
  // to req.user by the strategy's validate() method.
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: any, @Res() res: Response) {
    const result = await this.authService.validateOAuthUser(req.user);
    this.redirectWithSession(res, result);
  }

  // --- Facebook OAuth ---
  @Get('facebook')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth() {}

  @Get('facebook/callback')
  @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Req() req: any, @Res() res: Response) {
    const result = await this.authService.validateOAuthUser(req.user);
    this.redirectWithSession(res, result);
  }

  /**
   * Hands the freshly-issued JWT + user profile back to the frontend by
   * redirecting to a page that reads them from the URL and stores them
   * the same way the email/password login flow does. The frontend page
   * clears these query params from the address bar as its first step.
   */
  private redirectWithSession(
    res: Response,
    result: { access_token: string; user: Record<string, unknown> },
  ) {
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
    const token = encodeURIComponent(result.access_token);
    const user = encodeURIComponent(JSON.stringify(result.user));
    res.redirect(`${frontendUrl}/auth/callback?token=${token}&user=${user}`);
  }
}
