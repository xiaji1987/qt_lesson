//1. 原型链
function Parent() {}
function Children() {}
Children.prototype = new Parent
// 优点简单 缺点 属性被实例对象共享 不能复制

// 2.构造函数继承
function Parent(name) {}
function Child() {
  Parent.apply(this, name)
}
// 优点避免共享 能传参 缺点

// 3. 组合继承
function Parent() {}
function Child() {
  Parent.apply(this)
}
Child.prototype = new Parent
Child.prototype.constructor = Child

// 4.原型链式继承
function CreatedObj(o) {
  function F() {}
  F.prototype = o
  return new F()
}
// 优点简单 缺点 属性被共享

// 5. 寄生式继承
function CreatedObj(o) {
  var chone = Object.create(o)
  clone.sayName = function() {}
  return chone
}

// 6.组合式寄生继承
function Parent() {}
function Child() {
  Parent.apply(this)
}
var F = function () {}
F.prototype = Parent.prototype
Child.prototype = new F()

// 7. ES6继承
class A {
  constructor (props) {
    super(props)
    this.name = 'mememe'
  }
  sayName() {
    console.log()
  }
}