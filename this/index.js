// this 提供一种更优雅的方式来隐式“传递”一个对象
// function identify() {
//     // console.log(this);
//     return this.name.toUpperCase();
// }
// function speak() {
//     var greeting = "Hello, I'm " + identify.call(this);
//     console.log(greeting);
//     return greeting;
// }
// var me = {
//     name: 'wn'
// }
// var you = {
//     name: 'mg'
// }
// console.log(identify.call(me));
// console.log(identify.call(you));

// console.log(speak.call(me));
// console.log(speak.call(you));

// function a() {
//     var aaa = 1;
// }
// function b() {
//     console.log(aaa);
// }
// b.call(a);

// function identify(context) {
//     return context.name.toUpperCase();
// }
// function speak() {
//     var greeting = "Hello, I'm " + identify(me);
//     console.log(greeting);
//     return greeting;
// }
// console.log(identify(me));
// console.log(speak());

//------------------------------------

function foo(num) {
    console.log("foo" + num);
    this.foo.count++;
    console.log(this);
    // data.count++;
    // console.log(this.count);
}
foo.count = 0;
var data = {
    count: 0
}
for (let i = 0; i < 10; i++) {
    if(i > 5){
        foo(i);
    }
}
console.log(foo.count);

//----------------------------------------

// function foo() {
//     var a = 1;
//     bar();
// }
// function bar(){
//     console.log(this.a);// this是错误的
// }
// foo();
// 不能用this来引用一个词法作用域的属性

//---------------------------

// function baz(){
//     // 当前调用栈是baz
//     // 因此，当前调用位置是全局作用域
//     console.log('baz');
//     bar();
// }
// function bar(){
//     // 当前调用栈是baz -> bar
//     // 因此，当前调用位置baz
//     console.log('bar');
//     foo();
// }
// function foo(){
//     console.log('foo');
// }
// baz();

//------------------------------

// function foo() {
//     // "use strict"
//     console.log(this.a);
// }
// var a = 2;
// foo();

// ----------------------------

// function foo() {
//     console.log(this);
//     console.log(this.a);
// }
// var obj = {
//     a: 2,
//     foo: foo
// }
// obj.foo();