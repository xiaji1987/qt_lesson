<template>
<!-- 容器组建 -->
  <SubMenu>
    <template #title>{{data.title}}</template>
    <MenuItem v-for="child in data.children" :key="child.id" v-if="!child.children">{{child.title}}</MenuItem>
    <ReSubMenu v-else :data="child"></ReSubMenu>
  </SubMenu>
</template>

<script>
import SubMenu from './Submenu'
import MenuItem from './MenuItem'
export default {
  name: 'ReSubMenu',
  props: ['data'],
  components: {
    SubMenu,
    MenuItem
  }
}
</script>

<style scoped>

</style>
