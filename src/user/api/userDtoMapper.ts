import { User } from '../domain/User';
import type { UserDto } from './userDto';

export const userFromDto = (user: UserDto): User => {
  return new User(
    user.email,
    user.roles,
    user.createdAt,
    user.updatedAt,
    user.id
  );
};

// export const userToDto = (user: User): UserDto => {
//   return {
//     email: user.email,
//     roles: user.roles,
//     createdAt: user.createdAt,
//     updatedAt: user.updatedAt,
//     id: user.id
//   };
// };
