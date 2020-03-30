let obj = {
  a: 1,
  b: 2
}

let handle = {
  get: function(target, key) {
    return target[key]
  },
  set: function(target, key, newValue) {
    console.log('改变了')
    target[key] = newValue
  }
}

const p = new Proxy(obj, handle)

p.a = 2
console.log(obj)