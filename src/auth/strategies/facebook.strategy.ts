import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    // See the matching comment in google.strategy.ts — these placeholders
    // stop an unconfigured deployment from crashing the whole app at boot.
    super({
      clientID: process.env.FACEBOOK_APP_ID || 'not-configured',
      clientSecret: process.env.FACEBOOK_APP_SECRET || 'not-configured',
      callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'http://localhost:3001/api/auth/facebook/callback',
      scope: 'email',
      profileFields: ['emails', 'name'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: any): Promise<any> {
    const email = profile.emails?.[0]?.value || `${profile.id}@facebook.com`;

    const user = {
      email,
      first_name: profile.name?.givenName || profile.displayName || 'Facebook User',
      last_name: profile.name?.familyName,
    };
    done(null, user);
  }
}
