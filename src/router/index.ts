import { 
  createRouter, 
  createWebHistory 
} from 'vue-router';

import { useUserStore } from '@/stores/user';
import DashboardView    from '@/views/dashboard/HomeView.vue';
import HomeView         from '@/views/LandingView.vue';
import RecordsView      from '@/views/dashboard/RecordsView.vue';
import SelectorView     from '@/views/dashboard/SelectorView.vue';
import WikiView         from '@/views/dashboard/WikiView.vue';

const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    {
      path:      '/auth/login',
      name:      'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: {
        requireAuth: false
      }
    },
    {
      path:      '/',
      name:      'home',
      component: HomeView,
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
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isAuth    = userStore.isAuthenticated;

  if( to.meta.requireAuth && !isAuth ){
    next({ 
      name: 'login' 
    });
  } else {
    next();
  }  
})

export default router
