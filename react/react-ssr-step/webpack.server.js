const path = require('path');
const webpackMerge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals'); //把node内置包排除在外
const baseConfig = require('./webpack.base');
const serverConfig = {
  target: "node",
  mode: "development",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "build")
  },
  externals: [nodeExternals()]
}
module.exports = webpackMerge(baseConfig, serverConfig)
