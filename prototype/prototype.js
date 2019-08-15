// es5 面向对象
function Person(name) {// 女主角 
    // constructor 构造函数
    // Object
    this.name = name;
    this.getName();
    console.log(this);
}
// 男主
Person.prototype = {
    getName: function(){
        return this.name;
    },
    playHipy: function(){
        return 123;
    }
}
// new + fun() 新的对象
// 实例 第三者
let person = new Person("猛哥");
console.log(person.name);
console.log(person);