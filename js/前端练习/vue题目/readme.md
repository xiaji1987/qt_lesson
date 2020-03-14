1. vue的数据变化单页面没有变化？
- this.$set() 设置为全局变量
- forceUpdate 是调用vue上所以依赖，重新patch一遍

2. vue弹窗后如何禁止滚动条滚动？
定义两个方法 stop() 和 move()
代码如下

<script>
methods : {
  //禁止滚动
  stop(){
    var mo=function(e){e.preventDefault();};
    document.body.style.overflow='hidden';
    document.addEventListener("touchmove", mo, false);//禁止页面滑动
  },
  /***取消滑动限制***/
  move(){
    var mo=function(e){e.preventDefault();};
    document.body.style.overflow='';
    //出现滚动条
    document.removeEventListener("touchmove", mo, false);
  }
}
</script>

3. 如何在vue项目里正确使用jquery 和 jquery-ui的插件
- 安装依赖 npm i jquery --save
- build文件夹的webpack.base.conf.js引入
plugin: [
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })
]
- 然后直接在页面上引用 import $ from 'jquery'

4. vue的底层原理是什么？
双向数据绑定和订阅发布者模式

5. vue-loader是什么，用法？
解析vue文件的一个加载器，跟template/js/style转化为js模块
用法: js可以写成ES6, style可以写成scss或者less

6. vue.cli项目中src目录文件夹和用法
assests: 放静态资源
components: 放组件
router: 定义相关路由
view: 视图
app.vue: 一个应用主组件
main.js: 入口文件

7. vue.cli中怎样使用自定义的组件？有遇到过哪些问题吗？
- 在components目录下新建你的组件文件
- 导入文件，import *** from './components/***.vue
- 在组件中注册引入，component: {***}
- template使用，<***></***>

8. Vue.js的template编译的理解?
template先转化为AST树，在得到render函数返回vNode(vue的虚拟DOM)
- compile编译器吧templateb编译成AST语法书，compileCompiler的返回值
- AST会经过generate（将AST语法树转化成render funtion字符串的过程）得到render函数，render的返回值是VNode，VNode是Vue的虚拟DOM节点，里面有（标签名、子节点、文本等等）

9. vue的历史记录
history 记录中向前或者后退多少步

10. 直接给一个数组项赋值，Vue 能检测到变化吗？
Vue不能检测到数组的变动
利用索引设置一个数组项时 vm.items[index] = newValue
办法
Vue.set(vm.items, index, newValue)
vm.$set(vm.items, index, newValue)
vm.items.splice(index, 1, newValue)

修改数组长度时 vm.items.length = newLenght
vm.item.splice(newLength)

11. 9、在哪个生命周期内调用异步请求？
- 能更快获取到服务端数据，减少页面 loading 时间；
- ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性

12. 父组件可以监听到子组件的生命周期吗？
第一种 使用this.$emit
// Parent.vue
<Child @mounted="doSomething"/>
    
// Child.vue
mounted() {
  this.$emit("mounted");
}

第二种 使用@hook
//  Parent.vue
<Child @hook:mounted="doSomething" ></Child>

doSomething() {
   console.log('父组件监听到 mounted 钩子函数 ...');
},
    
//  Child.vue
mounted(){
   console.log('子组件触发 mounted 钩子函数 ...');
},
@hook 方法不仅仅是可以监听 mounted，其它的生命周期事件，例如：created，updated 等都可以监听。