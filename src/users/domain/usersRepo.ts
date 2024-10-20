import type { User } from './User';

export interface UsersRepo {
  getUsers(): Promise<User[]>;
  getUser(id: number): Promise<User>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: number): Promise<void>;
}
