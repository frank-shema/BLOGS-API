import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from './auth.service';
import { JwtPayload } from './jwt-payload.interface'; // Assuming you have a JWT payload interface

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from header
      secretOrKey: 'your_secret_key', // Replace with a strong secret key
    });
  }

  // Removed 'async' since no await expression is used
  validate(payload: JwtPayload) {
    return { userId: payload.sub, email: payload.email }; // Attach user info to request
  }
}
