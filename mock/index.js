import Mock from 'mockjs'

import user from './user'

const mocks = [
  ...user
];

//可能有问题
Mock.mock(user.url,user.type,user.response);

export default mocks
