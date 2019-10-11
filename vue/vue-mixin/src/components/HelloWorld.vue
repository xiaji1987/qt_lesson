<template>
  <div>
    <Mydialog />
    <Myloading />
  </div>
</template>

<script>
import Mydialog from './my-dialog'
import Myloading from './my-loading'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components: {
    Mydialog,
    Myloading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
