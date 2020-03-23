浏览器解析的3样东西
1. html模板 解析成DOM树
2. css 解析成css树
3. js脚本

解析完成后
浏览器引擎会通过DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree

布局
渲染树的每个元素包含的内容都是计算过的

最后
最后通过调用操作系统GUI的API绘制。