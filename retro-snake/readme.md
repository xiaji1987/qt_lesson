- canvas
- js异步是核心问题
  事件，定时器，fetch/ajax
  代码的编写顺序和只想你顺序不一样，代码的可读性下降
  loadAssets(); 1s 等待一下呢？
  hidWelcome()；在他之后
  js 先hidWelcome() loadAssets() 执行完成
  js 单线程语言
  再一次执行中 会把立即执行的代码执行掉，在事件监听/定时器/Ajax 事件轮询中

- img.onload
  window.omload 开始我们的表演 太慢了
  有没有比早一点发生的，但是html，css已经o了
  如果html，css，js

- 函数式编程
  写代码？ 完成开发需求（复杂） <=  独立的多个子需求完成  <=  单独封装成一个函数
  init();
  drawSanke();
  addEvent();
  refreshSnake();
  winOrLoose();
  showResult();
