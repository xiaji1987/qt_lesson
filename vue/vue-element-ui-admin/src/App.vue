<template>
  <div id="app">
    <el-row>
      <el-col :span="4">
        <div class="nav-logo-wrap">
          <img src="./assets/logo.png" alt="" class="logo">
        </div>
      </el-col>
      <el-col :span="20">
        <HeaderNavBar />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-pusple">
          <SiderNavBar />
        </div>
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderNavBar from '@/components/HeaderNavBar'
import SiderNavBar from '@/components/SideNavBar'
export default {
  name: "App",
  components: {
    HeaderNavBar,
    SiderNavBar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.nav-logo-wrap{
  text-align: center;
}
.logo {
  height: 56px;
}
</style>
