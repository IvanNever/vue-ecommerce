import { ref } from 'vue';
import type { User } from '../domain/User';

const users = ref<User[]>([]);

export function useUsers() {
  return { users };
}
