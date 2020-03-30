less sass/scss 都叫css预处理器

postcss css界的babel

scss的使用
1. 安装模块 npm i sass-loader、css-loader、node-sass
2. build找到webpack.base.config.js，在extend属性中拓展scss
3. 配置modules属性
4. <style lang="scss"></style>

特性
可以使用变量，($变量名字=值)
可以用混合器
可以嵌套

less和Sass的区别
变量符不一样，less是@。而Sass是$
Sass支持体哦阿健语句可以使用if{}else{},for{}循环等等，而less不支持
Sass是基于Ruby的，是在服务器端处理的，而less需要引入less.js来处理Less带啊吗输出到浏览器

