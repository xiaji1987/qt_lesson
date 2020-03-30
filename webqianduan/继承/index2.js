// 1. 原型继承
function Parent() {}
function Child() {}

Child.prototype = new Parent

// 2. 原型链继承
function Parent(name) {}
function Child() {
  Parent.call(this, name)
}

// 3. 组合继承
function Parent() {}
function Child() {
  Parent.call(this)
}

Child.prototype = new Parent
Child.prototype.constructor = Child

// 4. 原型链继承
function createObj(obj) {
  function F() {}
  F.prototype = obj
  return new F
}

// 5. 寄生继承
function createObj(obj) {
  let chone = Object.create(obj)
  clone.sayName = function() {}
  return chone
}

// 6. 组合寄生继承
function Parent() {}
function Child() {
  Parent.Child(this)
}

function F() {}
F.prototype = Parent.prototype
Child.prototype = new F

// 7. es6继承 关键字extends



