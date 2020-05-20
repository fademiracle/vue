import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  roles: []
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_NAME: (state, name) => {
    state.name = name
  }
};

const actions = {
  // user login
  login({commit}, userInfo) {
    const username = userInfo.username.trim();
    return new Promise((resolve, reject) => {
      login({username:username, password:userInfo.password}).then(response => {
        const { data } = response;
        commit('SET_TOKEN', data.token);
        setToken(data.token);
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response;
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { name,roles } = data;
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        commit('SET_ROLES', roles);
        commit('SET_NAME', name);
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken(); // must remove  token  first
        commit('RESET_STATE');
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }

};

export default {
  namespaced:true,
  state,
  actions,
  mutations
}
