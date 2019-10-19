<template>
  <div>
    <input type="text" name="name" v-model="name" />
    <input type="password" v-model="password" />
    <button @click="login">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      // restful 风格 api
      axios.post('/api/v1/login', {
        name: this.name,
        password: this.password
      })
      .then(res => {
        console.log(res)
      })
    }
  }
}
</script>
