- prototype的三角恋关系
  构造函数(constructor) 构造函数的原型 = {} 对象 实例
  Person.prototype = {};
  Person.prototype.getName
  es6 class 只有语法糖
  Person 构造函数 都会有prototype属性 原型对象
  实例会通过 prototype 对象拿到所有的方法
  person.getName();

  Person.prototype.constructor = Person();
  Person 1 => n person 的关系

  person Person.prototype
  实例如何拿到原型链上的方法呢？