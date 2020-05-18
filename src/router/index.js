import Vue from 'vue'
import Router from 'vue-router'

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
      hidden:true
    }
  ]
})
