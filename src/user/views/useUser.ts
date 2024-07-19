import { reactive, ref } from 'vue';
import type { User } from '../domain/User';

const user = ref<User | null>(null);

const errors = reactive<{ [key: string]: any[] }>({
  email: [],
  password: []
});

export function useUser() {
  return { user, errors };
}
