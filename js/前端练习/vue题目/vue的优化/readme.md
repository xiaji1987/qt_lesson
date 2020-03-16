1. 代码层面的
v-if和v-show区分场景用，尽量使用v-if
computed和watch区分场景使用
v-for便利必须添加item为key,且同时避免使用v-if
上列表性能优化，懒加载
事件的注销，比如setInterval和setTimeout
图片资源的懒加载
路由懒加载
第三方插件按需引入
优化无限列表的性能
服务端渲染SSR或预渲染

2. webpack层面的优化
webpack对图片进行压缩
减少ES6转为ES5的亢余代码
提取公共代码
模板预编译
提取公共的css模块代码
优化SourceMap
构建结果输出分析
Vue项目编译优化

3. web技术优化
在nginx中开启gzip压缩
浏览器缓存
CDN的使用