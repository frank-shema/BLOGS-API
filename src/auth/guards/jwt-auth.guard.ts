import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Add custom logic here if needed (e.g., checking roles)
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any): any {
    // Customize the error handling or user extraction logic
    if (err || !user) {
      if (err) {
        throw err;
      }
      throw new UnauthorizedException('Invalid or expired token');
    }
    return user;
  }
}
