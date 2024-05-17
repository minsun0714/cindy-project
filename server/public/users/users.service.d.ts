export type User = {
    username: string;
    password: string;
};
export declare class UsersService {
    private readonly user;
    getUser(username: string): Promise<User | undefined>;
}
