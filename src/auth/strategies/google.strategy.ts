import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    // passport-oauth2's base constructor throws if clientID/clientSecret/
    // callbackURL are falsy, and this strategy is instantiated at app
    // boot — so if we ever passed `undefined` here, an unconfigured
    // deployment (no GOOGLE_CLIENT_ID set) would crash the *entire*
    // backend, not just Google login. The 'not-configured' placeholder
    // keeps the app booting; only an actual attempt to sign in with
    // Google fails (cleanly, on Google's side) until real credentials
    // are set in .env.
    super({
      clientID: process.env.GOOGLE_CLIENT_ID || 'not-configured',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'not-configured',
      callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3001/api/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const email = profile.emails?.[0]?.value;
    if (!email) {
      return done(new Error('Google account has no accessible email address'), false);
    }

    const user = {
      email,
      first_name: profile.name?.givenName || profile.displayName || 'Google User',
      last_name: profile.name?.familyName,
    };
    done(null, user);
  }
}