import { Injectable } from '@nestjs/common';

export type User = {
  username: string;
  password: string;
};
@Injectable()
export class UsersService {
  private readonly user = {
    username: 'hyoji',
    password: 'changeme',
  };

  async getUser(username: string): Promise<User | undefined> {
    if (username === this.user.username) return this.user;
  }
}
