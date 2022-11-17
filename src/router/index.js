import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/AboutMe/index.vue'
import Experience from '../views/experience/index.vue';
import About from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('../views/AboutMe/index.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Portfolio/index.vue'),
    },
    {
      path: '/work-experience',
      name: 'experience',
      component: Experience
    }
  ]
})

export default router
