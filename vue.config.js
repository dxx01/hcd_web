const webpack = require('webpack')
module.exports = {
  // jquery配置
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        // 设置公用变量
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
