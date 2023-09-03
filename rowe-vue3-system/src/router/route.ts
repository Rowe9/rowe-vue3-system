export const constantRoute = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'signIn'
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {
      title: '404'
    },
    component: () => import(/* webpackChunkName: "400" */ '../views/404.vue')
  }
]
