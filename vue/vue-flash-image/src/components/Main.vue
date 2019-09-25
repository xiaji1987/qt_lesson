<template>
  <div class="Main">
    <div class="gauntlet">
      <button @click="disAppear">消失</button>
    </div>
    <Content :heroes="heroes" :lostHeroId="lostHeroId"/>
  </div>
</template>
<script>
import Content from './Content'
import { heroes } from './heroes.js'
export default {
  name: 'Main',
  data () {
    return {
      heroes: heroes,
      lostHeroId: []
    }
  },
  components: {
    Content: Content
  },
  methods: {
    disAppear () {
      this.lostHeroId = this.heroes.slice(0)
      .sort(() => 0.5 - Math.random())
      .slice(0, Math.ceil(this.heroes.length / 2))
      .map(heroes => heroes.id);
    }
  },
}
</script>

<style scoped>

</style>
