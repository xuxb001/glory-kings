import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue') // 懒加载组件
  },
  {
    path: '/king',
    name: 'king',
    component: () => import('@/views/king/index.vue')
  },
  {
    path: '/queen',
    name: 'queen',
    component: () => import('@/views/queen/index.vue')
  },
  {
    path: '/open-box',
    name: 'open-box',
    component: () => import('@/views/open-box/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
