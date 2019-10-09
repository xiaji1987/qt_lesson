<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{product.title}} - {{product.price}}
      <br>
      <button>Add to cart</button>
    </li>
  </ul>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  // 组件自身状态，不好共享
  // 私有的，在多个使用他的状态里，不一致
  // data() {
  //   return {
  //     products:[]
  //   }
  // },

  // 组件数据来源
  computed: mapState({
    products:state => state.products.all
  }),
  created(){
    // $store Vue.use(Vuex)
    // dispatch 派发动作的概念
    // 组件不在接触数据了，连api都不
    // namespace/action
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>

<style>

</style>