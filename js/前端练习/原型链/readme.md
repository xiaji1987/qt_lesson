原型链
每个对象都有一个原型__proto__，这个原型还可以有它自己的原型，以此类推，形成了原型链，查找特定的属性是，先去这个对象找，如果没有的话就去他的原型对象上去找，这就是原型链

prototype属性:
prototype是函数独有的，他是从一个函数指一个对象，函数的原型对象

__proto__
狮子啊圆形脸上实际用到的他总指向prototype,对象独有的

constructor
每个函数都有一个原型对象，该原型对象有一个construtor属性，执行创建对象函数本身
