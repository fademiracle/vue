const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles
  // userInfo: state => state.user.userInfo,
};

export default getters
