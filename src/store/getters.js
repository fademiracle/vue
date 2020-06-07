const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  // sidebar:state => state.app.sidebar,
  // device:state => state.app.device
};

export default getters
