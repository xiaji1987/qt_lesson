class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(eventName, func) {
    if (!this.events[eventName]) {
      this.events[eventName] = []
    }
    this.events[eventName].push(func)
  }
  emit(eventName, ...params) {
    const events = this.events[eventName]
    if (events) {
      events.forEach(event => {
        event.apply(this, params)
      });
    }
  }
  off(eventName, func) {
    if(this.events[eventName]) {
      if (!func) {
        this.events[eventName] = []
      } else {
        this.events[eventName].splice(this.events[eventName].indexOf(func), 1)
      }
    }
  }
}

const emitter = new EventEmitter
const sayHi = (name) => console.log(`Hello ${name}`)
const sayHi2 = (name) => console.log(`Good night, ${name}`)

emitter.on('Jack', sayHi)
emitter.on('hi', sayHi2)
emitter.emit('Jack', 'ScriptOJ')

emitter.off('Jack', sayHi2)
emitter.emit('hi', 'ScriptOJ')

const emitter2 = new EventEmitter()
emitter2.on('hi', (name, age) => {
  console.log(`I am ${name}, and I am ${age} years old`)
})
emitter2.emit('hi', 'Jerry', 12)