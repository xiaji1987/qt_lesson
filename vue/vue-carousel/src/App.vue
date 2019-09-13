<template>
  <div>
    <EcSlide time="1000" :autoplay="true" :list="list" :type="'slide'" :option="true" :swidth="800" :slidetype="'ease'" :direction="'left'"></EcSlide>
  </div>
</template>

<script>
import EcSlide from '@/components/EcSlide'
export default {
  name: 'App',
  components: {
    'EcSlide': EcSlide
  },
  data () {
    return {
      list: [
        {
          href: 'https://36kr.com/p/5245067',
          src: 'https://pic.36krcnd.com/201909/12030204/a6myzaob5uyszomn!heading'
        },
        {
          href: 'https://36kr.com/p/5245731',
          src: 'https://pic.36krcnd.com/201909/12000217/fggsu2ypi9t4011a!heading'
        },
        {
          href: 'https://36kr.com/p/5245740',
          src: 'https://pic.36krcnd.com/201909/11234002/cdcyqxr4mh1lrexo!heading'
        },
      ]
    }
  },
}
</script>

<style scope lang="stylus">

</style>
