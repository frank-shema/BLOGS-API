import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user; // Remove password from the result
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id }; // JWT payload
    return {
      access_token: this.jwtService.sign(payload), // Generate JWT
    };
  }

  async register(user: any) {
    const hashedPassword = await bcrypt.hash(user.password, 10); // Hash password
    return this.usersService.create({ ...user, password: hashedPassword });
  }
}
