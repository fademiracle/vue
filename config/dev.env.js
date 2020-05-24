'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

//dev.env.js
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"/dev-api"'
});
