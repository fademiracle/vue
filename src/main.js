import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import Cookie from 'js-cookie'

import './icons'
import '../mock/index.js'

Vue.config.productionTip = false;
Vue.use(ElementUI,{locale});

new Vue({
  el: '#app',
  router,
  store,
  Cookie,
  components: { App },
  template: '<App/>'
});
