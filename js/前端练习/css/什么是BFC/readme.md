BFC的称呼为块级格式上下文
BFC是页面上一个隔离独立的容器，容器里面的子元素不会影响外面的元素

如何创建BFC
float值不是none
postion的值不是static或者relative
display得知为inline-block,table-cell,flex,inline-flex
overflew不为visible'

作用
- 避免过了margin: 重叠
- 自动适应两栏布局
- 清除浮动