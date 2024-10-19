import { createRouter, createWebHistory } from 'vue-router';
import { usersRoutes } from '@/users/infrastructure/routes';
import AppLayout from '@/layouts/AppLayout.vue';
import AppNotFound from '@/common/views/AppNotFound.vue';
import DashboardView from '@/dashboard/views/DashboardView.vue';
import ProductsView from '@/products/views/ProductsView.vue';
import CategoriesView from '@/categories/views/CategoriesView.vue';
import OrdersView from '@/orders/views/OrdersView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      redirect: { name: 'dashboard' },
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: DashboardView
        },
        {
          path: 'products',
          name: 'products',
          component: ProductsView
        },
        {
          path: 'categories',
          name: 'categories',
          component: CategoriesView
        },
        {
          path: 'orders',
          name: 'orders',
          component: OrdersView
        },
        {
          path: 'users',
          name: 'users',
          redirect: { name: 'users-list' },
          children: usersRoutes
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'notFound',
          component: AppNotFound
        }
      ]
    }
  ]
});

export default router;
