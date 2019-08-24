// curry 函数, 返回新函数, 逐渐的消化，
function curry(fn, len = fn.length) {
    // console.log('123456');
    return _curry.call(this, fn, len);
}

function _curry(fn, len, ...args) {
    // typeof function
    // console.log('654321');
    // console.log(...args,'+++++');
    return function (...params) {
        console.log(...params,'-----');
        // 自己调用自己 递归
        // 如果没到数量， 返回函数，
        // 到了，执行代码
        let _args = [...args, ...params];
        if (_args.length >= len) {
            return fn.apply(this, _args);
        } else {
            return _curry.call(this, fn, len, ..._args)
        }
    }
}

let _fn = curry(function (a, b, c, d, e) {
    console.log(a, b, c, d, e);
})
_fn(1)(2)(3)(4)(5);
// _fn(1);
module.exports = curry;