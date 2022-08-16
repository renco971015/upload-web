const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: "./",
  devServer:{
    proxy:{
      '/test':{
        target:"http://localhost:9098",
        pathRewrite: {
          ' ^/test ': '/test'
        },
      }
    }
  }
})
