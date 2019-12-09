class EventEmitter {
  constructor () {
    this._events = this.event || new Map()// 存储事件
    this._maxListeners = this._maxListeners || 10 // 监听上限
  }
}

EventEmitter.prototype.emit = function(type, ...args) {
  let handler;
  // 从存储事件键值对this._events中获取对应事件回调函数
  handler =  this._event.get(type)

  // handler.apply(this, ...args)
  if(Array.isArray(handler)) {
    // 有多个监听者
    for (let i = 0; i < handler.length; i++) {
      if(args.length > 0){
        handler.apply(this, args)
      } else {
        handler(this)
      }
    }
  } else {
    if(args.length > 0){
      handler.apply(this, args)
    } else {
      handler(this)
    }
  }
  return true
}

// 监听名为type的事件
EventEmitter.prototype.addListener = function (type, fn) {
  const handler = this._events.get(type) //获取对应式间的清单
  if(!handler) {
    this._events.set(type, fn)
  } else if(handler && typeof handler == 'function') {
    // 只有一个坚挺着
    this._events.set(type, [handler, fn])
  } else {
    this._events.push(fn)
  }
}