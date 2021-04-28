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
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    // console.log(22, localStorage.getItem('isLogin'))
    // if (!localStorage.getItem('isLogin')) {
    //   console.log(33,)
    //   next({ path: "/login" })
    // }
  }
})
export default router
