- instanceof
- 手写一个instanceof函数
- 原型三者关系
  类(构造函数 + 原型对象)   实例对象
  Contructor.prototype = 原型对象
  原型对象.contructor = 构造函数
  实例对象.__proto__ === 原型对象
  instanceof 原型对象的两种表达， 或者延着原型链不停的查找