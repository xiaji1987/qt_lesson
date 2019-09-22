<template>
  <div id="app">
    <MenuList :data="menuList"/>
    <router-view/>
  </div>
</template>

<script>
import MenuList from './components/MenuList'
import menuData from './assets/menu.js'

export default {
  name: 'App',
  data () {
    return {
      menuList: menuData
    }
  },
  components: {
    MenuList
  }
}
</script>

<style>

</style>
