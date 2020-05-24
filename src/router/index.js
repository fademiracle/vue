import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      component:() => import('../views/login/index')
    },
    {
      path: '/register',
      component:() => import('../views/login/register'),
    },
    {
      path: '/findPassword',
      component:() => import('../views/login/forgetPassword'),
      hidden:true
    },
    {
      path: '/404',
      component: () => import('../views/404'),
      hidden: true
    },
    {
      path: '/',
      redirect:'/dashboard',
      //name:'dashboard',
      meta:[],
      component:() => import('../views/dashboard/index'),
    },
    {
      path: '/dashboard',
      //name:'dashboard',
      // meta:[],
      component:() => import('../views/dashboard/index'),
      children:[
        {
          //默认定向
          path:'/',
          redirect:'/homePage'
        },
        {
          path:'/homePage',
          name:'homePage',
          component:() => import('../views/homePageStatistics/index')
        },
        {
          path:'/market',
          name:'market',
          component:() => import('../views/marketManage/index')
        },
        {
          path:'/commodity',
          name:'commodity',
          component:() => import('../views/commodityManage/index')
        },
        {
          path:'/order',
          name:'order',
          component: () => import('../views/orderManage/index')
        },
        {
          path:'/property',
          name:'property',
          component: () => import('../views/propertyManage/index')
        },
        {
          path:'/shopping',
          name:'shopping',
          component: () => import('../views/shoppingMall/index')
        },
        {
          path:'/system',
          name:'system',
          component: () => import('../views/systemManage/index')
        },
        {
          path:'/util',
          name:'util',
          component: () => import('../views/utilText/index')
        }
      ]
    }
  ]
})
