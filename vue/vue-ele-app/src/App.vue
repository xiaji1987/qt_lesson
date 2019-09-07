<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
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
  components: {
    'v-header': header
  },
  created () {
    this.$http.get('https://www.easy-mock.com/mock/5d2ed7bb7f168b5e40d35f3d/movie/vue-ele-app')
      .then(res => {
        console.log(res)
        if (res.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl';
.tab
  display flex
  text-align center
  height 40px
  align-items center
  border-bottom 1px solid rgba(7,17,27,0.1)
  border-1px(rgba(7,17,27,0.1))
  &-item
    flex 1
    & > a
      color rgb(77,85,93)
      font-size 14px
      display block
      text-decoration none
      &.router-link-active
        color rgb(240, 20, 20)
</style>
