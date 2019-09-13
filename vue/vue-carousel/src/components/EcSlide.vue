<template>
  <div  class="switch-img-box" id="ec-slide-box" :style="{width: swidth + 'px'}"></div>
</template>

<script>
export default {
  name: 'EcSlide',
  data () {
    return {
      timer: null, // 定时器 组建自己打理， */
    }
  },
  // 外界的传参， 更好定制
  props: {
    time: {
      type: Number,
      default: 4000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    swidth: {
      type: Number
    }
  },
  methods: {
    
  },
  computed: {
    
  }
}
</script>

<style scoped lang="stylus">
// stylus stylus-loader
.switch-img-box
  width 100%
  height 100%
  position relative
</style>
