import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
   routes
})

// Middleware para autenticación

export default router
