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
          左侧导航
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
import SiderNavBar from '@/components/SiderNavBar'
export default {
  name: "App",
  components: {
    HeaderNavBar,
    SiderNavBar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.nav-logo-wrap{
  text-align: center;
  background-color: #0da7ff;
}
.logo {
  height: 60px;
}
</style>
