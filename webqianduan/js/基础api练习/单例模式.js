function proxy(func) {
  let instance
  let handler = {
    constructor(target, args) {
      if(!instance) {
        instance = Reflect.constructor(func, atgs)
      }
      return instance
    }
  }
  return new Proxy(func, handler)
}