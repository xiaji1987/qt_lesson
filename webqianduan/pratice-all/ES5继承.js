// 1. 原型继承
function Parent() {}
function Child() {}

Child.prototype = new Parent

// 2. 构造函数继承
function Parent(name) {}
function Child() {
  Parent.apply(this, name)
}

// 3. 组合继承
function Parent() {}
function Child() {
  Parent.apply(this)
}
Child.prototype = new Parent
Child.prototype.constructor = Child

// 4.原型链继承
function createObj(obj) {
  function Fn() {}
  Fn.prototype = obj
  return new Fn
}

// 5. 寄生继承
function CreateObj(obj) {
  let clone = Object.create(obj)
  clone.sayName = function () {}
  return clone
}

// 6. 组合寄生继承
function Parent() {}
function Child() {
  Parent.apply(this)
}

let Fn = function () {}
Fn.prototype = Parent.prototype
Child.prototype = new Fn
