<template>
  <div class="home">
    <header class="home-header wrap" :class="{'active' : headerActive}">
      <router-link tag="i" to="./category" class="iconfont icon-caidan"></router-link>
      <div class="header-search">
        <span class="app-name">M</span>
        <i class="iconfont icon-search"></i>
        <router-link tag="span" class="search-title" to="./search">家电返场同价11.11</router-link>
      </div>
      <router-link tag="span" to="./login" v-if="!isLogin">登录</router-link>
      <router-link tag="span" to="./user" v-else>
        <i class="iconfont icon-iconyonghu"></i>
      </router-link>
    </header>
    <nav-bar></nav-bar>
    <slider/>
  </div>
</template>

<script>
import navBar from '@/components/navBar'
import slider from '@/components/slider'
export default {
  comments: {
    navBar,
    slider
  },
  data () {
    return {
      headList: [],
      categoryList: [],
      isLogin: false
    }
  },
  beforeCreate() {
    if(!this.isLogin) {
      this.$route.redirect('/login')
    }
  },
  create () {
    // load data
  },
  mounted() {
    window.addEventListener('scroll', () => {})
  },
};
</script>

<style scoped>
.home {
  background-color: #53bac7;
  width: 200px;
  height: 500px;
}
</style>
