import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/page/Login') //登录页
    },
    {
      path: '/main',
      name: 'Main',
      component: () => import('@/page/Main'), //首页
    }
  ]
})

export default router
