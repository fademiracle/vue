import Mock from 'mockjs'

import user from './user'

const mocks = [
  ...user
];

Mock.mock(user.url,user.type,user.response);

export default mocks
