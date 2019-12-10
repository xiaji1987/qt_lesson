class Koa {
  constructor() {
    this.middleWare = [];
  }
  use(fn) {
    this.middleWare.push(fn)
  }
  run() {
    // application compose: 中间件
    const dispatch = (i) => {
      let fn = this.middleWare[i]
      // fn 是 use进来的函数 ctx next
      // fn({ctx: 'ctx'}, () => {// next
      //   // 剩余的运行
      //   return dispatch(i + 1)
      // })
      if(!fn) {
        return Promise.resolve()
      }
      return Promise.resolve(fn({ ctx: 'ctx' }, () => {
        return dispatch(i + 1)
      }))
    }
    dispatch(0)
  }
}

module.exports = Koa;