function _new(fn, ...arg) {
  var obj = Object.create(fn.propotype)
  var obj1 = fn.apply(obj, arg)
  return typeof obj1 ? obj1 : obj
}

console.log(parseFloat(0.1 + 0.2).toFixed(10) === 0.3)