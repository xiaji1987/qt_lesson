## 创建对象的几种方法
1. 对象字面量
...js
var obj = {
    name: '',
    ...
}

2. new Object();

3. 构造函数
   通过new调用的时候，会隐式的创建一个对象，把属性发到该对象，返回...js
   var t = new Object();
   t.x = x;
   return t;

   如果构造函数放回一个对象返回该对象
   function Foo() {
            this.a = 1;
        1.  return 2;
        2.  return {
                b: 2,
                c: 3
            }
        }
        var f = new Foo();
        console.log(f);//1. a: 1     //2. b: 2, c:3


## 
每一个函数 创建的时候 被赋予 prototype 属性