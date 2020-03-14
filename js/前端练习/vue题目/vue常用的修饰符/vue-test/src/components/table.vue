<template>
  <div>
    表单修饰符
    <div>
      修饰符：.lazy
      <input type="text" v-model.lazy="lazy">
      <p>{{lazy}}</p>
    </div>
    <div>
      修饰符：.trim
      <input type="text" v-model.trim="trim">
      <p>{{trim}}</p>
    </div>
    <div>
      修饰符：.number
      <input type="text" v-model.number="number">
      <p>{{number}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'table',
  data () {
    return {
      lazy: '',
      trim: '',
      number: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
