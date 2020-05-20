import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component:() => import('@/views/index/index')
    },
    {
      path: '/login',
      component:() => import('@/views/login/index'),
    },
    {
      path: '/register',
      component:() => import('@/views/login/register'),
    },
    {
      path: '/findPassword',
      component:() => import('@/views/login/forgetPassword'),
      hidden:true
    }
  ]
})
