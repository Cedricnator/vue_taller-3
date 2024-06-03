import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/dashboard/HomeView.vue';
import WikiView from '@/views/dashboard/WikiView.vue';
import RecordsView from '@/views/dashboard/RecordsView.vue';
import { useUserStore } from '@/stores/user';
import SelectorView from '@/views/dashboard/SelectorView.vue';

const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    {
      path:      '/',
      name:      'home',
      component: HomeView
    },
    {
      path:      '/auth/login',
      name:      'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path:     '/dashboard',
      name:     'dashboard',
      component: DashboardView,
      meta: {
        requireAuth: true
      }
    },
    {
      path:     '/dashboard/wiki',
      name:     'wiki',
      component: WikiView,
      meta: {
        requireAuth: false
      }
    },
    {
      path:      '/dashboard/records',
      name:      'records',
      component:  RecordsView,
      meta: {
        requireAuth: false
      }
    },
    {
      path:      '/dashboard/selector',
      name:      'selector',
      component:  SelectorView,
      meta: {
        requireAuth: false
      }
    },
    {
      path:      '/about',
      name:      'About',
      component: () => import('../views/AboutView.vue'),
      meta: {
        requireAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isAuth = userStore.isAuthenticated;
  console.log({'isAuth': isAuth})

  if(to.meta.requireAuth && !isAuth ){
     next({ name: 'login' });
  } else {
     next();
  }  
})

export default router
