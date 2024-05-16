import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<string> {
    const user = await this.usersService.getUser(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    return user.username;
  }
}
