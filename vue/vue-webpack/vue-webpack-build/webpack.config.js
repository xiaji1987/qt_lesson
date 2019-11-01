const path = require('path')
const VueloaderPlugin = require('vue-loader/lib/plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development', // production
  entry: {
    bundle: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash:5].js'
  },
  resolve: {
    extensions: ['.vue', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, ',/src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueloaderPlugin(),
    new HtmlWebPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ]
}