var date = new Date();
var error = new Error();
function a() {}

console.log(typeof date);
console.log(typeof error);
console.log(typeof a);

console.log(Object.prototype.toString.apply(date));
console.log(Object.prototype.toString.apply(error));
console.log(Object.prototype.toString.apply(a));

