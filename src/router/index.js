import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import HomeView from '@/views/HomeView.vue'
import PqrsView from '@/views/users/PqrsView.vue'
import { routes } from './routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   routes
})

// Middleware para autenticación

export default router
