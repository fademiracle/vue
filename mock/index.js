import Mock from 'mockjs'

import user from './user'

const mocks = [
  ...user
];

//mock server
// const responseFake = (url, type, respond) => {
//   console.log('responseFake'+`${process.env.API_ROOT}${url}`);
//   console.log('responseFake'+type || 'get');
//   console.log('--------------------------------');
//   return {
//     url: new RegExp(`${process.env.API_ROOT}${url}`),
//     type: type || 'get',
//     response(req, res) {
//       console.log('request invoke:' + req.path);
//       res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
//     }
//   }
// };
//
// export default mocks.map(route => {
//   console.log('mocks.map'+route.url);
//   console.log('mocks.map'+route.type);
//   console.log('mocks.map'+route.response);
//   return responseFake(route.url, route.type, route.response)
// })


//Json格式
Mock.mock(process.env.API_ROOT+'/user/login','post',{'code': 20000, 'data': {token:'admin-token'}});
Mock.mock(process.env.API_ROOT+'/user/info?token=admin-token', 'get',
          {'code':20000,
                     'data': {
                              roles: ['admin'],
                              name: 'Super Admin'
                             }
                    }
          );
Mock.mock(process.env.API_ROOT+'/user/logout','post',{'code':20000,'data':'success'});


