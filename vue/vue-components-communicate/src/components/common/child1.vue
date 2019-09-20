<template>
  <div id="child1">
    {{msg}}
    {{msg2}}
    <button @click="fn">按钮</button>
    {{a}}
    {{b}}
    <p>----------------------------------</p>
    <button @click="add">+</button>
    {{count}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      oCount: 0
    }
  },
  props: ['msg', 'msg2', 'fn', 'a', 'b', 'count', 'add'],
  // created () {
  //   this.oCount = this.count
  // },
  methods: {
    // add () {
    //   // this.count++
    //   // this.$emit('addCount')
    // }
  }
}
</script>

<style>

</style>
