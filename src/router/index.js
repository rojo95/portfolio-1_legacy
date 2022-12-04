import { createRouter, createWebHistory } from 'vue-router'
import Experience from '../views/experience/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('../views/AboutMe/index.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/simple_portfolio/index.vue'),
      // component: () => import('../views/Portfolio/index.vue'),
    },
    {
      path: '/work-experience',
      name: 'experience',
      component: Experience
    },
    {
      path: '/project-details/:id',
      name: 'project-details',
      component: () => import('../views/portfolioDetails/index.vue')
    },
    { path: '/:catchAll(.*)',
     component: () => import ('../views/AboutMe/index.vue'), },
  ]
})

export default router
