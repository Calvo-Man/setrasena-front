import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si la ruta tiene un hash, desplazarse hacia el ancla
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    // Si no hay un hash, se puede volver a la posición anterior
    return savedPosition || { x: 0, y: 0 };
  },
});

export default router;
