class EventEmit {
  constructor() {
    this.event = {}
  }
  on(eventName, fn) {
    this.event[eventName] ? this.event[eventName].push(fn) : this.event[eventName]  = [fn]
  }
  emit(eventName, ...args) {
    // console.log(this.event[eventName])
    this.event[eventName] && this.event[eventName].forEach(fn => fn(...args))
  }
  off(eventName) {
    this.event[eventName] && delete this.event[eventName]
  }
  once(eventName, fn) {
    this.on(eventName, (...args) => {
      fn(...args)
      this.off(eventName)
    })
  }
}

const emitter = new EventEmit
const sayHi = (name) => console.log(`Hello ${name}`)
const sayHi2 = (name) => console.log(`Good night, ${name}`)

emitter.on('Jack', sayHi)
emitter.on('hi', sayHi2)
emitter.emit('Jack', 'Mark')
emitter.once('Jack', sayHi)