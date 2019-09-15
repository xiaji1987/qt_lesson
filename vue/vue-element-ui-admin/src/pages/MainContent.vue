<template>
  <div class="mainContent">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item v-for="route in $route.matched" :key="route.path">
        {{route.meta.name}}
      </el-breadcrumb-item>

    </el-breadcrumb>
    <router-view />
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.mainContent{
  margin-left: 20px;
}
.breadcrumb{
  margin-top: 20px;
}
</style>
