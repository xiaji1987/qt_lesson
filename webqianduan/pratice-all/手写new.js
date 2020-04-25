function myNew(fn, ...args) {
  let obj = Object.create(fn.prototype)
  let res = fn.apply(obj, args)
  return typeof res == 'object' ? res : obj
}

function myNew1(fn, ...args) {
  let obj = {}
  obj.__proto__ = fn.prototype
  let res = fn.apply(obj, args)
  return typeof res == 'object' ? res : obj
}