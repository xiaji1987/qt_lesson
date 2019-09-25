<template>
  <div id="app">
    <Main></Main>
    <router-view/>
  </div>
</template>

<script>
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    Main: Main
  }
}
</script>

<style>

</style>
