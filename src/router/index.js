import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/practice01',
    name: 'practice01',
    component: () => import('../views/practice01.vue')
  },
  {
    path: '/practice02',
    name: 'practice02',
    component: () => import('../views/practice02.vue')
  },
  {
    path: '/practice03',
    name: 'practice03',
    component: () => import('../views/practice03.vue')
  },
  {
    path: '/practice04',
    name: 'practice04',
    component: () => import('../views/practice04.vue')
  },
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
