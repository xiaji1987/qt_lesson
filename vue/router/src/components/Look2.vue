<template>
  <div class="Look2">
    <h1>{{ msg }}</h1>
    {{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: 'Look2',
  data () {
    return {
      msg: 'Look2'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
