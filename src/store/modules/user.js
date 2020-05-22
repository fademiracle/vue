import { login, logout, getInfo } from '@/api/user'
//import {getToken ,setToken ,removeToken} from '@/utils/auth'
// import router, { resetRouter } from '@/router'
import Cookies from 'js-cookie'

const user = {
  state: {
    token: '',
    roles: null
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    // user login
    LoginByUsername({commit}, userInfo) {
      const username = userInfo.username.trim();
      //console.log(username+userInfo.password);
      return new Promise((resolve, reject) => {
        login(username,userInfo.password).then(response => {
          const data  = response.data;
          //这里取不到token
          Cookies.set('Token',response.data.token);
          commit('SET_TOKEN', data.token);
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
