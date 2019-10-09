- focus 数据流设计
- modules  
宏观设计一个项目  
模块 对应于vuex中的一个数据单元  
设计 四大家族构成  
Store 单一状态树  
树  
```js
export default new Vuex.Store({
  小型项目不要用Vuex，很复杂，就用组件传值 props+$emit
  大型项目呢？ vuex modules
})
```
this.$store.products.items  
this.$store.cart.items  
namespace:true  
- 传统vue
```js
mounted()
axios /api/products/:1
this.products = 
```
- vuex
products数据不在vuex里  
组件mounted() dispatch  
actions  
axios /api/products/:1  
mutation products.all  
