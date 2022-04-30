module.exports = {
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias:{
        // '@':'src'
        'assets':'@/assets',
        'common':"@/common",
        "components":'@/components',
        "network":"@/network",
        "views":"@/views"
      }
    }
  }
}
