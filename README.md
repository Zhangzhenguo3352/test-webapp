1，github 新建一个仓库
2，下载 下来  git clone xxxx
3，git init    初始化 package.json
4，touch .gitignore README.md   创建隐藏文本，和 说明文本
5，mkdir src build  创建两个文件夹 src初始化文件夹 和 build编译后的文件夹
6，在 src 文件夹中    touch index.js component.js  创建index.js 和  component.js
7，在 build 文件夹中    touch index.html  创建index.html
8，npm install webpack -g --save-dev    我发现必须全局安装
9，touch webpack.config.js         webpack 用的话也需要，建一个配置文件。 
10，package.json  里配置 利用 npm run build 打包
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build":"webpack"
},
11，没有在 package.json 里配置，利用 webpack 命令打包
12，npm install webpack-dev-server --save-dev   可以使调试，更方便些
13，持续监听 修改了就马上 打包出来 -w （--watch 的简写）
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w"
},
14，webpack --help 看webpack 中有哪些命令
          webpack --progess --colors   打包 显现进度 和 颜色区分
          webpack --display-error-details   打包 显现错误 位置在哪行


15，能够启动热更新 8080 端口 package.json 写，可以访问  http://localhost:8080
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w --display-error-details --colors",
  "dev":"webpack-dev-server"
},
     可以指定 ，默认访问端口进入那个文件，可以这样 --content-base build ,默认指向 build 文件夹
     
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w --display-error-details --colors",
  "dev":"webpack-dev-server --content-base build"
},
     它也有参数
     
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack -w --display-error-details --colors",
  "dev":"webpack-dev-server --content-base build --colors"
},
16，修改文件的 package.json 时 要先使用，npm run build 然后在启动热更新 npm run dev 
17，多页面，多分支，webpack也可以打包，需要修改 webpack.config.js
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


































