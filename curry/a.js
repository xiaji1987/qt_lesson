function sum(a, b, c) {// 一次性
    return a + b + c;
}
console.log(sum(1,2,3));
let _sum = curry(sum);
let A = _sum(1);
let B = A(2);
console.log(B(3));