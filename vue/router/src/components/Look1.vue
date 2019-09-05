<template>
  <div class='Look1'>
    <h1>{{ msg }}</h1>
    <div class='go-two' @click="goTwo">去look2</div>
  </div>
</template>

<script>
export default {
  name: 'Look1',
  data () {
    return {
      msg: 'Look1'
    }
  },
  methods: {
    goTwo () {
      this.$router.push({name: '/look/look2', params: {id: 666}})
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(from, to)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log(from, to)
    next()
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
