<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      background-color="#eeeeee"
      class="el-menu-vertical-demo"
      router
    >
      <el-menu-item index="1-1">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/main/user-manage">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">用户管理</template>
          <el-menu-item index="/main/manage-list">用户列表</el-menu-item>
          <el-menu-item index="1-2">用户信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 80px;
  bottom: 0;
  background-color: #2e363f;
}
.sidebar > ul {
  height: 100%;
}
</style>
