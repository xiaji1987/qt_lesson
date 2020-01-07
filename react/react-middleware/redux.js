const mid1 = next => action => {
  console.log(1)
  next()
  console.log(2)
}
// mdi1(mid2())
// 需要next
// 指向下一项 mid2
// 组合从右到左，组合完之后把mid2 交给mid1
const mid2 = next => action => {
  console.log(3)
  next()
  console.log(4)
}
const mids = [mid1, mid2]
/**
 * mid1 () {
 *  console.log(1)
 *  next === mid2()
 *  console.log(2)
 * }
 */

// compose
let fn1 = str => str.split('')
let fn2 = str => str.toLocaleLowerCase()
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
const opt = compose(fn1, fn2)
console.log(fn1(fn2('ABCDE')))
console.log(opt('ABCDE'))

const chain = compose(...mids)
/**
 * redux dispatch
 * 原生 dispatch  一个对象
 * redux-thunk 可以dispatch 一个函数
 * if (typeof action === 'function'){
 *  if (action is Promise) {
 *    dosomething
 *  }
 * } else {
 *   原始的dispatch
 * }
 */
let nbDispatch = chain(() => {
  console.log('我是最原始的dispatch')
})
nbDispatch()
