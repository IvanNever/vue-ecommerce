import { createRouter, createWebHistory } from 'vue-router'
import AppEntity from '@/entity/views/AppEntity.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppEntity
    }
  ]
})

export default router
