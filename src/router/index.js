import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

//布局
import Layout from '../layout/index'

export const constantRoutes = [
  {
    path: '/login',
    component:() => import('../views/login/index'),
    hidden:true
  },
  {
    path: '/register',
    component:() => import('../views/login/register'),
    hidden:true
  },
  {
    path: '/findPassword',
    component:() => import('../views/login/forgetPassword'),
    hidden:true
  },
  {
    // 当设置 true 的时候该路由不会在侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
    // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
    path: '/404',
    redirect: 'noredirect',
    component: () => import('../views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect:'/dashboard',
    name:'dashboard',
    children: [
      {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }
    ]
  },
  {
    path:'/eChart',
    component:Layout,
    redirect:'/eChart',
    name:'eChart',
    meta: {title:'eChart',icon:'eChart'},
    children:[
      {
      path:'/eChart',
      name: 'eChart',
      component:() => import('../views/echart/index'),
      meta: { title: 'eChart', icon: 'eChart' }
    }
    ]
  },
  {
    path:'/menus',
    component:Layout,
    redirect:'/menusA',
    name:'menus',
    meta: {title:'menus',icon:'menus'},
    children:[
      {
        path:'/menusA',
        name:'menusA',
        component:() => import('../views/menus/menusA/index'),
        meta:{ title: 'menusA',icon:'menus'},
        children:[
          {
            path:'/menus1',
            name:'menus1',
            component: () => import('../views/menus/menusA/menus1/menus1'),
            meta:{ title: 'menus1',icon:'menus'}
          },
          {
            path:'/menus2',
            name:'menus2',
            component: () => import('../views/menus/menusA/menus2/menus2'),
            meta:{ title: 'menus2',icon:'menus'}
          }
        ]
      },
      {
        path:'menusB',
        name:'menusB',
        component: () => import('../views/menus/menusB/index'),
        meta: { title:'menusB',icon:'menus'}
      }
    ]
  },
  {
    path:'example',
    component:Layout,
    redirect:'/example/table',
    name:'example',
    meta:{title:'example',icon:'example'},
    children:[
      {
        path:'/table',
        name:'table',
        component: () => import('../views/table/index'),
        meta: { title:'table',icon:'table'}
      },
      {
        path:'/tree',
        name:'tree',
        component: () => import('../views/tree/index'),
        meta: { title:'tree',icon:'tree'}
      }
    ]
  }
];

const createRouter = () => new Router({
  // history 无 "#", hash有
  mode:'history',
  routes:constantRoutes
});

const router = createRouter();

// export function resetRouter() {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher // reset router
// }

export default router





// export default new Router({
//   routes: [
//     {
//       path: '/login',
//       component:() => import('../views/login/index'),
//       hidden:true
//     },
//     {
//       path: '/register',
//       component:() => import('../views/login/register'),
//       hidden:true
//     },
//     {
//       path: '/findPassword',
//       component:() => import('../views/login/forgetPassword'),
//       hidden:true
//     },
//     {
//       path: '/404',
//       component: () => import('../views/404'),
//       hidden: true
//     },
//     {
//       path: '/',
//       component: Layout,
//       redirect:'/dashboard',
//       children: [{
//         path: '/dashboard',
//         name: 'Dashboard',
//         component: () => import('../views/dashboard/index'),
//         meta: {
//           title: 'Dashboard',
//           icon: 'dashboard'
//         }
//       }]
//     },
//     {
//       path:'/homePage',
//       component:Layout,
//       redirect:'/homePage',
//       name:'Home',
//       meta:{
//         title: 'Home', icon: 'home'
//       },
//       children:[{
//         path:'/homePage',
//         name: 'HomePage',
//         component:() => import('../views/echart/index'),
//         meta: { title: 'Home', icon: 'home' }
//       }]
//     },
//     {
//       path:'/market',
//       component:Layout,
//       redirect:'/market',
//       children:[{
//         path:'/market',
//         name:'Market',
//         component:() => import('../views/marketManage/index')
//       }]
//     },
//     {
//       path:'/commodity',
//       component:Layout,
//       redirect:'/commodity',
//       children:[{
//         path:'/commodity',
//         name:'commodity',
//         component:() => import('../views/commodityManage/index')
//       }]
//     },
//     {
//       path:'/order',
//       component:Layout,
//       redirect:'/order',
//       children:[{
//         path:'/order',
//         name:'order',
//         component: () => import('../views/orderManage/index')
//       }]
//     },
//     {
//       path:'/property',
//       component:Layout,
//       redirect:'/property',
//       children:[{
//         path:'/property',
//         name:'property',
//         component: () => import('../views/propertyManage/index')
//       }]
//     },
//     {
//       path:'/shopping',
//       component:Layout,
//       redirect:'/shopping',
//       children:[{
//         path:'/shopping',
//         name:'shopping',
//         component: () => import('../views/shoppingMall/index')
//       }]
//     },
//     {
//       path:'/system',
//       name:'system',
//       component: () => import('../views/systemManage/index')
//     },
//     {
//       path:'/util',
//       name:'util',
//       component: () => import('../views/utilText/index')
//     }
//   ]
// })
