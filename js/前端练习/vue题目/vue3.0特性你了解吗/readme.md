vue3.0使用了proxy
消除了很多Object.defineProperty的限制
1. 监测属性
- 只能监测属性，不能监测对象
- 检测属性的添加和删除
- 检测数组索引的长度和长度的变更
- 支持Map, Set, wekMap和WeakSet

2. 模板
模板变化不大，之改变了作用域插槽，2.x的机制导致作用域插槽变了，父组件重新渲染，而3.0把作用域插槽改成了函数的形式，之影星自组建的重新渲染，提升渲染性能

3. 对象是的组件生命方式
vue3.0改成了TypeScript来写，必须有个静态类型来做一些富足管理，现在vue3.0全面改用TypeScript来重写，更容易使得暴露的api与TypeSCript更容易结合

4. 其他方面
支持自拟定义渲染器
支持Fragment和Protal组件
基于Treeshaking优化，提供更多的内置功能