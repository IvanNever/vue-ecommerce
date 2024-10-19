import type { RouteRecordRaw } from 'vue-router';
import UsersList from '../views/UsersList.vue';
import UserDetails from '../views/UserDetails.vue';
import UserCreate from '../views/UserCreate.vue';

export const usersRoutes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'users-list',
    component: UsersList
  },
  {
    path: ':id',
    name: 'user-details',
    component: UserDetails
  },
  {
    path: 'create',
    name: 'user-create',
    component: UserCreate
  }
];
