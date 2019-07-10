//talk in js
// 国王 鸭子合唱团 1000只鸭子
const chior = [];//合唱团 是数组 1000名成员
//方法
function joinchaior(animal){//函数用参数
    //检测一下
    //加入数组
    chior.push(animal);
    //数量达到了，就汇报
}
//js对象字面量来描述一个对象
const duck = {
    type:'鸭子',//属性
    sex:'公',
    duckstring: function(){//行为
        console.log('嘎嘎嘎');
    }
}
joinchaior(duck);