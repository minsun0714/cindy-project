import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getUser(username);
    console.log('📢[auth.service.ts:9]: user: ', user);
    return { user, pass };
  }
}
