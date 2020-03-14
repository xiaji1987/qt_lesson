webpack最佳配置

1. 配置入口 entry
  单入口: module.exports ={
    entry: './index.js
  }
  多入口: 使用key: value键值对的形式
  入口对应着依赖关系图谱，那些要进行打包

  <!-- 动态配置入口文件: 写成函数的形式 --> 

2. 配置出口 output
  output: {
    path: path.resolve(打包对应的绝对路径)

    filename: 打包后的文件名
    publicPath: '/' 打包index.html的资源位置(图片)
  }

3. 配置模式 mode
  mode: production //默认 生产者模式
  较小的输出包体积
  浏览器中更快的代码执行速度
  忽略开发中的代码
  不公开源代码或文件路径
  <!-- 易于使用的输出资产 -->

  mode: development // 开发者模式
  浏览器调试工具
  快速增量编译可加快开发周期
  运行时提供有用的错误消息

  mode: none // 不进行任何优化

4. 配置解析策略 resolve
  自定义寻找依赖模块时的策略（例如 import _ from 'lodash'）

5. 配置解析和转换文件的策略 module
  决定如何处理项目中不同类型的模块，通常是配置 module.rules 里的 Loader:
  比如 tsx-loader 处理ts文件
  less-loader：处理 less 文件，并将其编译为 css

6. 配置优化 optimization
  选择的 mode 进行优化，你可以手动配置，它将会覆盖自动优化
  最小化包
  拆包
  node_modules包过大，拆分成一小块，那块变化没重新加载那一块

7. 配置 plugin
  Plugin 去处理及优化其它的需求

8. happypack
Webpack 对项目进行构建时，会对大量文件进行解析和处理。当文件数量变多之后，Webpack 构件速度就会变慢。由于运行在 Node.js 之上的 Webpack 是单线程模型的，所以 Webpack 需要处理的任务要一个一个进行操作。
而 Happypack 的作用就是将文件解析任务分解成多个子进程并发执行。子进程处理完任务后再将结果发送给主进程。所以可以大大提升 Webpack 的项目构件速度
vue-loader@15已经不支持happypack了, 换成thread-loader了