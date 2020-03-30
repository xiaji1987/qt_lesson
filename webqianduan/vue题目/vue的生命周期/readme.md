过程: 开始创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程
vue的生命周期一共有八个
1. beforeCreate(创建前) new Vue实例挂载到元素$el上,data为undefined,还未初始化
2. created(创建后)完成数据的初始化，$el还未初始化
3. beforeMount(载入前)vue的实例$el和data都初始化了，render函数首次被调用，编译模板，把data里面的数据和模板生成html,此时还没有挂载html到页面上
4. mounted(载入后) 在el被新创建vm.$el替换，挂载到实例上去，编译好的html内容替换el属性指向DOM对象，完成html显然到页面中
5. beforeUpdate(更新前)在数据更新之前调用不会触发附加的崇训阿然过程
6. updated(更新后)DOM已经更新
7. beforeDestory(销毁前)实例销毁之前，实力完全可以使用
8. destroyed(销毁后)实例销毁之后，所有实例都会被销毁