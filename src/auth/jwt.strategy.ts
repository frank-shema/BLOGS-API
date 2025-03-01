import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from header
      secretOrKey: 'your_secret_key', // Replace with a strong secret key
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email }; // Attach user info to request
  }
}
