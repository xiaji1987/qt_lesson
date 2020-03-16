回流的触发: 
- 添加会产出DOM元素
- 元素位置发生变化
- 元素大小发生变化
- 内容发生变化
- 页面开始的渲染
- 浏览器窗口大小发生变化

重绘的触发
- 改变color
- background-color

避免回流重绘
1. css 
避免使用table布局
避免使用多层内联样式
GPU加速
2. js
一次重写style，或者加个class
避免频繁操作DOM
display:none 变为display: block不会发生回流重绘
