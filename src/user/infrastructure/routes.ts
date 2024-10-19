import type { RouteRecordRaw } from 'vue-router';
import UserList from '../views/UserList.vue';
import UserDetails from '../views/UserDetails.vue';
import UserCreate from '../views/UserCreate.vue';

export const userRoutes: RouteRecordRaw[] = [
  {
    path: 'users',
    name: 'User-list',
    component: UserList
  },
  {
    path: 'users/:id',
    name: 'User-details',
    component: UserDetails
  },
  {
    path: 'users/create',
    name: 'User-create',
    component: UserCreate
  }
];
