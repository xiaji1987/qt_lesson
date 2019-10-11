<template>
  <div class="search">
    <div class="search-box-wrapper">
      <v-searchBox @query="onQueryChange" ref="searchBox"></v-searchBox>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <v-scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div>
          <!-- 热门搜索 -->
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index">
                <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
          <!-- 搜索历史 -->
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="taxt">搜索历史</span>
              <span class="clear">
                <i class="icon">&#xe612;</i>
              </span>
            </h1>
            <!-- 搜索历史列表 -->
            <v-searchlist :searches="searchHistory" @select="addQuery"></v-searchlist>
          </div>
        </div>
      </v-scroll>
    </div>
    <!-- 搜索结果 -->
    <div class="search-result" v-show="query" ref="searchResult">
      <v-suggest :query="query" @select="saveSearch" @listScroll="blurInput" ref=""></v-suggest>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
import scroll from '@/components/scroll'
import searchList from '@/components/searchList'
import suggest from '@/components/suggest'
import api from '@/api'
import { searchMixin } from '@/common/mixin'

export default {
  data () {
    return {
      shortcut: [],
      refreshDelay: 1,
      hotKey: [
        {first: '要放假了'}
      ],
      searchHistory: [1],
      query: ''
    }
  },
  mixins: [searchMixin],
  components: {
    'v-searchBox': searchBox,
    'v-scroll': scroll,
    'v-searchlist': searchList,
    'v-suggest': suggest
  },
  methods: {
    onQueryChange (e) {
      this.query = e
    },
    addQuery () {},
    _getHotKey () {
      api.HotSearchKey().then((res) => {
        if (res.code === 200) {
          this.hotKey = res.result.hots.slice(0, 10)
        }
      })
    },
    blurInput () {}
  },
  created() {
    this._getHotKey()
  },
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/function'
.search
  overflow hidden
  &-box-wrapper
    margin px2rem(40px)
  .shortcut-wrapper
    position fixed
    top px2rem(360px)
    bottom 0
    width 100%
    .shortcut
      height 100%
      overflow hidden
      .hot-key
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title
          margin-bottom px2rem(40px)
          font-size 14px
          color hsla(0, 0%, 100%, 0.5)
        .item
          display inline-block
          padding px2rem(10px) px2rem(20px)
          margin 0 px2rem(20px) px2rem(20px) 0
          border-radius 6px
          font-size 14px
          color hsla(0, 0%, 100%, 0.3)
          background #2f3054
      .search-history
        position relative
        margin 0 px2rem(40px)
        .title
          display flex
          align-items center
          height px2rem(80px)
          font-size 14px
          color hsla(0, 0%, 100%, 0.5)
          .text
            flex 1
          .clear
            .icon
              font-size 18px
              color hsla(0, 0%, 100%, 0.3)
</style>
