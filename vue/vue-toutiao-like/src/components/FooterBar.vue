<template>
  <footer class="footer-wraper df-c border-half-top">
    <ul class="cf">
      <router-link tag="li" v-for="(item, index) in footerBarList" :key="index" :to="item.path">
        <div>{{ item.title }}</div>
      </router-link>
    </ul>
  </footer>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  computed: {
    footerBarList () {
      console.log(this.$store.state.layout.footerBarList)
      return this.$store.state.layout.footerBarList
    }
    // ...mapState(['footerBarList'])
  }
}
</script>

<style scoped>

</style>
