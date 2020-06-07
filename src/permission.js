import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import router from './router'
import store from './store'

import { Message } from 'element-ui'
import getPageTitle from './utils/getPageTItile'
import {getToken} from "./utils/auth"

//关闭小圆环
NProgress.configure({showSpinner: false});

//导航守卫 to：进入到哪个路由去 from：从哪个路由离开 next 跳转下一个
router.beforeEach(async (to,from,next)=>{
  //开始进度条
  NProgress.start();
  //页面名称
  document.title = getPageTitle(to.meta.title);
  //看用户是否携带token
  const userToken = getToken();
  if(userToken){
    //判断是否进入了登录页
    if (to.path === '/login') {
      //如果登陆了就跳转首页
      next({path:'/'});
      NProgress.done()
    }else{
      const getUserInfo = store.getters.name;
      if (getUserInfo) {
        next()
      }else {
        try {
          //获取 userInfo
          await store.dispatch('user/getInfo');
          next()
        }catch (err) {
          await store.dispatch('user/resetToken');
          Message.error(err || 'has error!');
          next(`/login?redirect=${to.path}`);
          NProgress.done()
        }
      }
    }
  } else {
    //没有token
    //返回login在path中出现的位置
    if ('/login'.indexOf(to.path)!== -1) {
      next()
    } else {
      //登录
      next(`/login?redirect=${to.path}`);
      NProgress.done()
    }
  }
});

router.afterEach(()=>{
  //加载完成
  NProgress.done()
});
