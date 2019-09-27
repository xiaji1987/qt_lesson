<template>
  <div id="app">
    <!-- <el-button :plain="true" @click="openVn">VNode</el-button> -->
    <!-- <img src="./assets/logo.png" /> -->
    <!-- <router-view /> -->
    <my-elrow tag="div" :jiange="20">
      <my-elcol :span="4">col-1</my-elcol>
      <my-elcol :span="20" :offset="4">col-2</my-elcol>
    </my-elrow>
  </div>
</template>

<script>
import ElRow from './components/El-Row'
import ElCol from './components/El-Col'
export default {
  name: "App",
  components: {
    'my-elrow': ElRow,
    'my-elcol': ElCol
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
