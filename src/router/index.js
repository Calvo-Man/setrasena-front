import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';
import store from '../store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada, regresa a ella
    if (savedPosition) {
      
    } else {
      // Aquí es donde puedes manipular el scroll del contenedor
      const container = document.querySelector('.container');
      if (container) {
        container.scrollTop = 0; // Asegura que el contenedor haga scroll al inicio
      }
    return { x: 0, y: 0 };
    }
  },
});
// Middleware para autenticación
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated
  // const userRole = store.state.user?.rol || ''
  // const puede = store.state.puede || false

  // if (to.matched.some(record => record.meta.puede)) {
  //   if (!puede) {
  //     return next({ path: '/sugas' }) // Redirige a la ruta anterior si no puede
  //   }
  // }

  // Si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      return next(from) // Redirige a la ruta anterior si no está autenticado
    }
  }
  next()
})


export default router;
