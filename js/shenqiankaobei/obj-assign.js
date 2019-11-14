if (typeof Object.assign2 != 'function') {
  Object.defineProperty(Object, 'assign2', {
    value: function (target) {
      'use strict';
      if (target == null || target == undefined) {
        throw new TypeError('Cannot conver undefined or null')
      }
      var to = Object(target)
      for (let index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]
        if (nextSource != null) {
          for (let nextKey of Object.getOwnPropertyNames(nextSource)) {
            // if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            //   to[nextKey] = nextSource[nextKey]
            // }
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
      return to
    },
    configurableL: true,
    writable: true
  })
}

let a = {
  name: 'aaaa',
  sex: 'man',
  book: {
    title: "You js",
    price: '1005',
    age: 20
  }
}

let b = {
  name: 'wwww',
  book: {
    title: "You kow c",
    price: '55'
  }
}

// let c = Object.assign(a, b)
// console.log(c)
let d = Object.assign2(a, b)
console.log(d)
