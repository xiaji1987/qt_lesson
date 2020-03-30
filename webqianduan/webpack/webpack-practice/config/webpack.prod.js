const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.js');
const templatePath = path.join(__dirname, '../public/index.html')

module.exports = webpackMerge(baseConfig, {
  mode: 'none',
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },
  entry: [
    path.resolve(__dirname, '../src/pageEntry/index/index.js')
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendors', // 第三方
          test: /{react|react-dom}/, // 需要分离的包
          chunks: 'all' // import  from ''
        }
      }
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: templatePath
    }),
    // new webpack.DllReferencePlugin({
    //   manifest: require('../dist/dll/vendor.dll')
    // })
  ]
});