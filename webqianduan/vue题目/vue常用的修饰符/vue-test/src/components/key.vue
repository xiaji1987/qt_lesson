<template>
  <div>
    修饰符: keycode
    <input placeholder="按下enter键" type="text" @keyup.enter="shout(4)">
    <input placeholder="按下删除键" type="text" @keyup.delete="shout(4)">
  </div>
</template>

<script>
export default {
  name: 'key',
  methods: {
    shout(event) {
      console.log(event)
    }
  },
}
</script>

<style>

</style>