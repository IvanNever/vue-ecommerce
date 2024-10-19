import { BaseRepo } from '@/infrastructure/api/BaseRepo';
import { userFromDto } from './userDtoMapper';
import type { UserRepo } from '../domain/userRepo';
import type { User } from '../domain/User';
import type { UserDto } from './userDto';

const baseUrl: string = 'http://localhost:5000';

export class UserRepoImpl extends BaseRepo implements UserRepo {
  constructor() {
    super();
  }
  async getUsers(): Promise<User[]> {
    const res = await this.inst.get<UserDto[]>(`${baseUrl}/users`);
    return res.data.map((item) => userFromDto(item));
  }
  async getUser(id: number): Promise<User> {
    const res = await this.inst.get<UserDto>(`${baseUrl}/post/${id}`);
    return userFromDto(res.data);
  }
  async createUser(User: User): Promise<User> {
    const res = await this.inst.post<UserDto>(`${baseUrl}/post`, { User });
    return userFromDto(res.data);
  }
  async updateUser(User: User): Promise<User> {
    const res = await this.inst.put<UserDto>(`${baseUrl}/post`, { User });
    return userFromDto(res.data);
  }
  async deleteUser(id: number): Promise<void> {
    return await this.inst.delete(`${baseUrl}/post/${id}`);
  }
}
