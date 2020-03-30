class EventEmit {
  constructor() {
    this.event = {}
  }
  emit(eventName, cb) {
    this.event[eventName] ? this.event[eventName].push(cb) : this.event[eventName] = [cb]
  }
  on(eventName, params) {
    this.event[eventName] && this.event[eventName].foreach(cb => cb(params))
  }
  off(eventName) {
    this.event[eventName] && delete this.event[eventName]
  }
  once(eventName, cb) {
    this.on(eventName, (...args) => {
      cb(...args)
      this.off(eventName)
    })
  }
}