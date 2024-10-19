import { createContext, type Context } from '@/infrastructure/context'
import { UserRepoImpl } from '../api/userRepoImpl'

export let userContext: Context

export function initUserContext() {
  userContext = createContext('user')

  userContext.registry(UserRepoImpl, 'UserRepository')
}
