// 简单类型的拷贝是拷贝值
let a = 1;
let b = a;

// 复杂数据类型，拷贝是引用式赋值
let obj = {
        a: 1,
        b: function() {
            console.log('bbb')
        }
    }
    // obj2 = obj; // 浅拷贝
    // 返回新的对象
    // json.stringify 只对对象中的简单数据类型处理
obj2 = JSON.parse(JSON.stringify(obj)); //先变成string简单类型，再JSON.parse变成json对象？
obj2.a = 2;
console.log(obj.b())
console.log(obj2)