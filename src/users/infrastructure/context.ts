import { createContext, type Context } from '@/infrastructure/context';
import { UsersRepoImpl } from '../api/usersRepoImpl';

export let usersContext: Context;

export function initUserContext() {
  usersContext = createContext('users');

  usersContext.registry(UsersRepoImpl, 'UsersRepository');
}
