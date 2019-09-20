<template>
  <div id="app">
    <router-view/>
    <!-- <child1 
    :msg="msg" 
    :msg2="msg2" 
    :fn="appFu" 
    v-bind="test"
    :count="count"
    @addCount="countAdd"
    :add="countAdd"
    ></child1>
    <p>----------------------</p>
    <child2></child2>
    <p>----------------------</p>
    <child3 @fromChild="fromChild"></child3>
    <span>{{message}}</span> -->
  </div>
</template>

<script>
import child1 from '@/components/common/child1'
import child2 from '@/components/common/child2'
import child3 from '@/components/common/child3'
export default {
  name: 'App',
  components: {
    child1,
    child2,
    child3
  },
  data () {
    return {
      msg: '给child1的礼物',
      msg2: '再次给child1的礼物',
      test: {
        a: 1,
        b: 2
      },
      count: 1,
      message: '父组件默认的数据'
    }
  },
  methods: {
    appFu () {
      console.log('我是app.vue里面的方法')
    },
    countAdd () {
      // this.count++
    },
    fromChild (e) {
      // console.log(e)
      this.message = e
    }
  }
}
</script>

<style>
#app {

}
</style>
