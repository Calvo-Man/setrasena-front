import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: {path:"/home"},
      children:[
        { path: "/home", name: "Home", component: HomePage },
        {path:"/about", name:"About",component:AboutView}
      ]
    },
    
  ],
})

export default router
