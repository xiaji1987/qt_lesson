<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link tag="span" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link tag="span" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link tag="span" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http({
      method: 'get',
      baseURL: 'seller'
    })
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin'
.tab
  display flex
  justify-content space-around
  flex-direction row
  align-items center
  height 40px
  border-bottom 1px solid rgba(7,17,27,.1)
  border-1px(rgba(7,17,27,.1))
  &-item
    & > span
      display block
      font-size 14px
      color rbg(77, 85, 93)
      font-weight bold
      &.router-link-exact-active
        color rgb(240, 20, 20)
</style>
