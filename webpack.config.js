/*
* 配置一个 webpack 配置文件
*
*
*
* */

module.exports = {
    //我的入口文件
    entry:{
        index:'./src/index.js',
        com:'./src/component.js'
    },
    //输出
    output:{
        path:'./build',
        filename:'[name].js'
    }
}