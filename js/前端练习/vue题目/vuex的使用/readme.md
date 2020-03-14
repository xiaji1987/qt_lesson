1. vuex就是一个仓库，仓库存放很多对象，state就是存放数源的地方，对应vue的data

2. state里面存放的数据是响应式的，vue组建从store读取数据，若store中的数据发生变化，依赖的组件也发生变化

3. 组件通过mapState把全局的state和getters映射到当前的组件computed计算属性

vuex的5种属性分别是: state、 mutation、 action、getter、module

state: Vuex使用单一状态树。即每个应用包含一个store实例。存放数据状态，不可以直接修改

mutation: mutations定义方法
动态的修改Vuex里面的store的状态或者数据

action: action可以理解为通过mutation的方法变成可以不的处理数据的方法，简单的说解释异步操作，组件通过store.dispath来分发action

getter: 类似vue的计算属性，过滤一些数据

module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中

4. Vuex解决了非父子之间通信的问题，vuex通过共享state作为数据中心

5. 什么数据放在vuex中
- 组件之间全局共享的数据
- 通过后端异步请求的数据 比如做加入购物车、登录状态等

6. 为什么使用mutation改变state，而不是action
改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。

