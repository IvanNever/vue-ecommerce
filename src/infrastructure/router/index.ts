import { createRouter, createWebHistory } from 'vue-router'
import EntityList from '@/entity/views/EntityList.vue'
import EntityDetails from '@/entity/views/EntityDetails.vue'
import EntitySave from '@/entity/views/EntitySave.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: { name: 'entity-list' },
      children: [
        {
          path: 'entities',
          name: 'entity-list',
          component: EntityList
        },
        {
          path: 'entities/:id',
          name: 'entity-details',
          component: EntityDetails
        },
        {
          path: 'entities/:id/save',
          name: 'entity-save',
          component: EntitySave
        }
      ]
    }
  ]
})

export default router
