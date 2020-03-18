function _new(fn, ...arg) {
  var obj = Object.create(fn.propotype)
  var obj1 = fn.apply(obj, arg)
  return typeof obj1 ? obj1 : obj
}


function mynew(fn, ...args) {
  let obj = Object.create(fn,prototype)
  let res = fn.apply(obj, args)
  return typeof res == 'Object' ? res : obj
}

function mynew1(fn, ...args) {
  let obj = Object.create(fn.prototypr)
  let root = fn.apply(obj, args)
  return typeof root == 'object' ? root : obj
}