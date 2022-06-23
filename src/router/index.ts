import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */'@/views/home/index.vue') // 懒加载组件
  },
  {
    path: '/kingdom',
    name: 'kingdom',
    component: () => import(/* webpackChunkName: "about" */'@/views/kingdom/index.vue'),
    children:[
      {
        path: '/king',
        name: 'king',
        component: () => import(/* webpackChunkName: "about" */'@/views/kingdom/king/index.vue'),
      },
      {
        path: '/queen',
        name: 'queen',
        component: () => import(/* webpackChunkName: "about" */'@/views/kingdom/queen/index.vue'),
      }]
  },
  {
    path: '/open-box',
    name: 'open-box',
    component: () => import(/* webpackChunkName: "about" */'@/views/open-box/index.vue')
  },
  {
    path: '/find-earth',
    name: 'find-earth',
    component: () => import(/* webpackChunkName: "about" */'@/views/find-earth/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
