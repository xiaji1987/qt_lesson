// 1. 原型链继承
function Parent() {}
function Child() {}
Child.prototype = new Parent

// 2. 构造函数继承
function Parent() {}
function Child() {
  Parent.apply(this)
}

// 3. 组合继承
function Parent(){}
function Child() {
  Parent.apply(this)
}
Child.prototype = new Parent
Child.prototype.constructor = Child

// 4. 原型链继承
function createObj(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}

// 5. 寄生继承
function CreateObj(obj) {
  let chone = Object.create(obj)
  chone.sayName = function() {}
  return clone
}

// 6. 组合寄生继承
function Parent() {}
function Child() {
  Parent.apply(this)
}
let F = function () {}
F.prototype = Parent.prototype
Child.prototype = new F()
