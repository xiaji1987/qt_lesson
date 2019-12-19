const path = require('path')
const webpackMerge = require('webpack-merge')
const config = require('./webpack.base.js')

const clientConfig = {
  mode: 'development',
  entry: './src/client/index.jsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = webpackMerge(config, clientConfig)