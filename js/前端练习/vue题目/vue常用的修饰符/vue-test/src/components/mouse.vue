<template>
  <div>
    <button @click.left="shout(1)">左鼠标点击</button>
    <button @click.middle="shout(2)">滚轮点击</button>
    <button @click.right="shout(3)">右鼠标点击</button>
  </div>
</template>

<script>
export default {
  name: 'mouse',
  methods: {
    shout(event) {
      console.log(event)
    }
  }
}
</script>

<style>

</style>