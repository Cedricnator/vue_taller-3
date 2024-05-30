import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/dashboard/HomeView.vue'
import WikiView from '@/views/dashboard/WikiView.vue'
// import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      // meta: {
      //   layout: 'auth',
      //   requireAuth: false
      // }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/dashboard/wiki',
      name: 'wiki',
      component: WikiView
    },
    
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // const userStore = useUserStore();
//   // const isAuth = userStore.isAuthenticated;
//   // if(to.meta.requireAuth && !isAuth ){
//   //   next({ name: '/auth/login' });
//   // } else {
    
//   // }
// })

export default router
