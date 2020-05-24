import Mock from 'mockjs'

import user from './user'

const mocks = [
  ...user
];

//Mock.mock(process.env.API_ROOT+user.url,user.type,user.response); //全部显示undefined

// console.log(process.env.API_ROOT+'/user/login');
// console.log('post');
// console.log({code: 20000, data: 'admin-token'});

//Json格式
Mock.mock(process.env.API_ROOT+'/user/login','post',{'code': 20000, 'data': 'admin-token'});
Mock.mock(process.env.API_ROOT+'/user/info',
          'get',
          {'code':20000,
                     'data': {
                              roles: ['admin'],
                              name: 'Super Admin'
                             }
                    }
          );


