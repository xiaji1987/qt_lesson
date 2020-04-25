class EventEmit {
  constructor() {
    this.event = []
  }
  on(eventName, callback) {
    this.event[eventName] ? this.event.push(callback) : this.event = [callback]
  }
  emit(eventName, param) {
    this.event[eventName] && this.event[eventName].forEach(cb => cb(param))
  }
  off(eventName) {
    this.event[eventName] && delete this.event[eventName]
  }
  once(eventName, callback) {
    this.on(eventName, (args) => {
      callback(args)
      this.off(eventName)
    })
  }
}