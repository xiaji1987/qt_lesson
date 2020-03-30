let compose = require('./middleware')

var ms = [
  function foo (ctx, next) {
    console.log('foo1')
    next()
    console.log('foo2')
  },
  function bar (ctx, next) {
    console.log('bar1')
    next()
    console.log('bar2')
  },
  function qux (ctx, next) {
    console.log('qux1')
    next()
    console.log('qux2')
  }
]

compose(ms)()