import { login, logout, getInfo } from '../../api/user'
import { getToken, setToken, removeToken } from '../../utils/auth'
//import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    roles:[]
  }
};

const state = getDefaultState();

const mutations = {
  //状态重置，登出
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
};

const actions = {
  // user login
  login({commit}, userInfo) {
    const {username, password} = userInfo;
    console.log("store user.js:");
    console.log(userInfo);
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password}).then(response => {
        console.log('store user.js response:');
        console.log(response);  //undefined
        const {data} = response;
        commit('SET_TOKEN', data.token);
        setToken(data.token);
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({commit, state}) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const {data} = response;

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const {name, roles} = data;

        commit('SET_NAME', name);
        commit('SET_ROLES', roles);
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({commit, state}) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken(); // must remove  token  first
        //resetRouter()还没做
        commit('RESET_STATE');
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      //先移除token,然后重置
      removeToken();
      commit('RESET_STATE');
      resolve()
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

