class Observer {
  constructor(fn) {
    this.update = fn
  }
}

class SUbject {
  constructor() {
    this.Observers = []
  }
  addObserver(observer) {
    this.Observers.push(observer)
  }
  notify() {
    this.Observers.forEach((observer) => {
      observer.update()
    })
  }
}