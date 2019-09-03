- 深拷贝
- 性能优化
- 1. chrome 自带性能优化工具
    console.warn()  console.error()
    console.time('for-in') console.timeEnd('for-in')
    顺序执行  瞬间执行
- for key in 性能不太好，用for代替，while最快
- 浅拷贝 返回的对象，并不是独立的新的对象，跟直观理解有差异
- 浅拷贝 深拷贝 规避内存指向问题
    返回新对象JSON.parse(JSON.stringify())
- JSON.parse(JSON.stringify())
    会返回对象，复杂的，function(){},不处理
    但能解决大部分问题
- 递归，如果value是对象的话，还需再一步解构   recursion
    大的问题，由多个类似(clone)问题构成，并且有一个退出条件
    clone多层JSON嵌套，由内到外的一层层解决
    一层时，直接返回