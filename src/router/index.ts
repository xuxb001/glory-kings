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
    path: '/find-earth',
    name: 'find-earth',
    component: () => import(/* webpackChunkName: "about" */'@/views/find-earth/index.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "about" */'@/views/demo/index.vue'),
    children:[
      {
        path: '/demo1',
        name: 'demo1',
        component: () => import(/* webpackChunkName: "about" */'@/views/demo/components/demo1/index.vue'),
      },
      {
        path: '/demo2',
        name: 'demo2',
        component: () => import(/* webpackChunkName: "about" */'@/views/demo/components/demo2/index.vue'),
      },
      {
        path: '/demo3',
        name: 'demo3',
        component: () => import(/* webpackChunkName: "about" */'@/views/demo/components/demo3/index.vue'),
      },
      {
        path: '/demo4',
        name: 'demo4',
        component: () => import(/* webpackChunkName: "about" */'@/views/demo/components/demo4/index.vue'),
      },
      {
        path: '/demo5',
        name: 'demo5',
        component: () => import(/* webpackChunkName: "about" */'@/views/demo/components/demo5/index.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
