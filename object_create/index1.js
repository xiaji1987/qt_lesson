// Object.create 返回一个新对象
const person = {
    isHuman: false,
    prinIntroduction: function() {
        console.log('My name is ${this.name} . Am I human ? ${this.Human}')
    }
}
function create(proto) {
    function F() {};
    F.prototype = proto;
    return new F();
}
const me = create(person);
console.log(me.__proto__ === person);