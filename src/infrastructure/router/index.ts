import { createRouter, createWebHistory } from 'vue-router'
import { userRoutes } from '@/user/infrastructure/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: { name: 'User-list' },
      children: [...userRoutes]
    }
  ]
})

export default router
