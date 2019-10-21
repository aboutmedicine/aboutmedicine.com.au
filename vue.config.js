const path = require('path');
const webpack = require('webpack');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  // outputDir: path.resolve(__dirname, '/dist'),
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    },
    disableHostCheck: true
  },
  configureWebpack: {
    devtool: 'eval-source-map',
    plugins: [
			new webpack.ProvidePlugin({
        THREE: 'three'
      })
      // new CompressionPlugin({
      //   algorithm: 'gzip',
      //   test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.wasm$|\.svg?.+$/,
      // })
		]
  },
}
