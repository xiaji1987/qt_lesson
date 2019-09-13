<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.vue-toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  font-size: 12px;
  border: 1px solid green;
  padding: 4px 6px;
  color: green;
  border-radius: 4px;
}
.toast-top{
  top: 30px;
}
.toast-bottom{
  top: auto;
  bottom: 30px;
}
</style>
