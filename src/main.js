import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import './icons'
import '../mock/index.js'

Vue.config.productionTip = false;
Vue.use(ElementUI,{locale});

import Echarts from './echarts/index'
Vue.prototype.$echarts = Echarts;

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/dev-api'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '/prod-api'
}

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
