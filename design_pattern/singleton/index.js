// function Singleton() {
//     let instance = null;
//     return instance;
// }
const Singleton = (function() {
    // 闭包 closure
    let instance = null;// 闭包区域
    console.log('---------');
    return function() {
        // constructor
        if (instance) {
            return instance;
        }
        return instance = this;
    }
})();
console.log(Singleton, typeof Singleton);
// 实例 return 单例模式
console.log(Singleton);
const a = new Singleton();
const b = new Singleton();
console.log(a);
console.log(b);
console.log(a == b);