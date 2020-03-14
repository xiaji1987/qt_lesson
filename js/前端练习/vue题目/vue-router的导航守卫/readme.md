vue导航首位
1. 全局守卫
- router.beforeEach迁居前阵子首位，进入路由之前,进行路由拦截
- router.beforeResolve在befoRouteEnter调用之后调用
- router.afterEach进入路由之后

2. 路由独享首位
- beforeEnter 在全局牵制守卫之后，不会被全局首位覆盖

3. 路由组件守卫
- beforeRouteEnter 进入路由之前，组建还没实例化创建之前
- brforeRouteUpdate 路由公用一个组件，当前路由改变时，组件被服用
- beforeRouteLeave 离开当前路由，导航离开对影时调用

参数: 
- to(去那个路由)
- from(离开的路由)
- next(一定要用这个函数才能去到下一个路由，如果不用就拦截)