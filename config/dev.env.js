
// config内的文件其实是服务于build的，大部分是定义一个变量export出去  
'use strict' //采用严格模式


// 开发环境配置
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})

 console.log(99,module)
