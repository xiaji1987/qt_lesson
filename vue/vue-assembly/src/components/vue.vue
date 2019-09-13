<template>
  <div>
    <button @click="check">点击查看效果</button>
  </div>
</template>

<script>
export default {
  name: 'vue',
  methods: {
    check () {
      this.$toast('网络异常', 'bottom');
    }
  },
}
</script>
