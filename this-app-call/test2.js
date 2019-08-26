var a = {
    name: 'cherry',
    fn: function(b,c) {
        console.log(this.name,b,c);
    }
}
var b = a.fn;
// 函数运行时内部this的指向为a
b.apply(a,[1,2]);// apply 以数组传参
b.call(a,1,2);// call 以展开的形式传参