function Animal(planet) {
    this.planet = planet;
}
// constructor 函数是JS的一等对象
// 原型对象
Animal.prototype.getPlanet = function() {
    return this.planet;
}
function Person(name){
    this.name = name;
}
Person.prototype.getName = function() {
    return this.name;
}
// 人类也在地球
// 原型链上 Animal=>Animal.prototype=>Object
Person.prototype = new Animal('earth');
const person = new Person("三三三");
console.log(person.getPlanet());
console.log(person.getName());
