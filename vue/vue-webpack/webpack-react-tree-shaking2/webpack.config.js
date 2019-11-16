const path = require('path');
const webpack = require('./node_modules/_webpack@4.41.2@webpack/lib/webpack');
const HtmlWebPackPlugin = require('./node_modules/_html-webpack-plugin@3.2.0@html-webpack-plugin');
const CopyWebpackPlugin = require('./node_modules/_copy-webpack-plugin@5.0.5@copy-webpack-plugin/dist/cjs'); // 复制assets目录的插件
const MiniCssExtractPluigin = require('mini-css-extract-plugin'); // 复制assets目录的插件

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, './src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPluigin.loader,
            options: {
              hmr: true
            },
          },
          {
            loader: 'css-loader',
            options: {
              // modules: true //css-modile
              modules: {
                mode: 'local',
                localIdentName: '[path][name][hash:base64:5]'
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    hot: true, // 启用热更新
    contentBase: path.join(__dirname, './src/') // 才能到http://localhost:8081/访问
  },
  plugins: [
    new HtmlWebPackPlugin({
			template: './index.html'
    }),
    new CopyWebpackPlugin([
      {from: 'src/assets/', to: 'assets/'} // to表示要复制到的dist下的文件夹
    ]),
    new MiniCssExtractPluigin({
      filename: '[name].css'
    })
  ]
}