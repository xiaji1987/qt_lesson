// var curry = function(fn) {
//   let arr = []
//   let len = fn.length
//   return function next(...args) {
//     arr = arr.concat(args)
//     if(arr.length >= len) {
//       let temp = arr
//       arr = []
//       return fn(...temp)
//     } else {
//       return next
//     }
//   }
// }

// function curry(fn, arr = []) {
//   return fn.length === arr.length ? fn.apply(null, arr) : function (...args) {
//     return curry(fn, arr.concat(args))
//   }
// }

// function add(x, y, z) {
//   return x + y + z
// }

// let func = curry(add)

// console.log(func(1)(2)(3))

// function currey(fn, arr = []) {
//   return fn.length == arr.length ? fn.apply(null, arr) : function (...args) {
//     return any(fn, arr.concat(args))
//   }
// }

// function curry(fn, arr = []) {
//   return fn.length == arr.length ? fn.apply(null, arr) : function (...args) {
//     return curry(fn, arr.concat(args))
//   }
// }


function curry(fn, arr = []) {
  return fn.length == arr.length ? fn.apply(null, arr) : function (...args) {
    return curry(fn, arr.concat(args))
  }
}

function add(x, y, z) {
  return x + y + z
}

let func = curry(add)

console.log(func(1, 2)(3))