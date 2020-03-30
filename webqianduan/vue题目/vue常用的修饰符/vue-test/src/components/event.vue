<template>
  <div>
    事件修饰符
    <div>
      修饰符: .stop
      <div @click="shout(2)">
        <button @click.stop="shout(1)">ok</button>
      </div>
    </div>
    <div>
      修饰符: .prevent
      <router-link to="/table">去table页</router-link>
    </div>
    <div>
      修饰符: .self
      <div style="heigh: 30px; background: yellow;" @click.self="shout(2)">
        <button @click="shout(1)">ok</button>
      </div>
    </div>
    <div>
      修饰符: .once
      <button @click.once="shout(1)">ok</button>
    </div>
    <div>
      修饰符: .capture
      <div @click.capture="shout(1)">
        obj1
        <div @click.capture="shout(2)">
          obj2
          <div @click="shout(3)">
            obj3
            <div @click="shout(4)">
              obj4
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      修饰符: .passive
      <div v-on:scroll.passive="onScroll">...</div>
    </div>
    <div>
      修饰符: .native
      <My-component @click.native="shout(3)"></My-component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event',
  methods: {
    shout(event) {
      console.log(event)
    }
  }
}
</script>

<style>

</style>