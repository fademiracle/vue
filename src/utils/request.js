import axios from 'axios'
import { Message ,MessageBox} from 'element-ui'
import store from '../store'
import { getToken } from './auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.API_ROOT, // 有问题
  // url:,
  timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    console.log("拿到Based_URL：");
    console.log(process.env.API_ROOT);
  // Do something before request is sent
    if (store.getters.token) {
    console.log("request store.getters.token:");
    console.log(store.getters.token);
    console.log("request getToken():");
    console.log(getToken());
    // config.headers['X-Token'] = getToken();
    config.headers['X-Token'] = getToken(); // 让每个请求携带token--['X-Token']为自定义key
  }
  console.log("axios request:");
  console.log(config);
  return config;
},
    error => {
  // Do something with request error
  console.log(error);// for debug
  return Promise.reject(error)
});

// response拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      });

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload();// 为了重新实例化vue-router对象 避免bug
          });
        })
      }
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  error => {
    console.log('err' + error);// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service
