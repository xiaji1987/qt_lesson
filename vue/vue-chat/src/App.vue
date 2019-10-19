<template>
  <div id="app">
    容器组件
    <ThreadSection />
    <MessageSection />
  </div>
</template>

<script>
import ThreadSection from './components/ThreadSection'
import MessageSection from './components/MessageSection'
export default {
  name: 'App',
  components: {
    ThreadSection,
    MessageSection
  },
  mounted() {
    this.$store.dispatch('getAllMessages')
  }
}
</script>

<style>
@import './css/chat.css'
</style>
