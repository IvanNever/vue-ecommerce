import { createRouter, createWebHistory } from 'vue-router';
import { userRoutes } from '@/user/infrastructure/routes';
import AppLayout from '@/layouts/AppLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppLayout,
      redirect: { name: 'User-list' },
      children: [...userRoutes]
    }
  ]
});

export default router;
