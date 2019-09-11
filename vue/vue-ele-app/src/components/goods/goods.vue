<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in goods" :key="index" class="menu-item"
           @click="selectMenu(index, $event)" :class="{'current': currentIndex === index}">
            <span class="text border-1px">
              <span class="icon" :class="classMap[item.type]" v-if="item.type > 0"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="food-list" ref="foodList">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="(food, index) in item.foods" :key="index" class="food-item border-1px">
                <div class="icon">
                  <img :src="food.icon" alt="" width="57" height="57">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <div class="now">￥{{food.price}}</div>
                    <div class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</div>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <cart-control :food="food" @add="addFood"></cart-control>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 购物车 -->
      <shop-cart :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shop-cart>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import cartcontrol from '@/components/cartcontrol/cartcontrol'
import shopcart from '@/components/shopcart/shopcart'
export default {
  name: 'goods',
  components: {
    'cart-control': cartcontrol,
    'shop-cart': shopcart
  },
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      classMap: [],
      listHeight: [],
      scrollY: 0
    }
  },
  computed: {
    currentIndex () {
      let ls = this.listHeight
      let sy = this.scrollY
      for (let i = 0; i < ls.length; i++) {
        let h1 = ls[i]
        let h2 = ls[i + 1]
        if (!h2 || (sy >= h1 && sy < h2)) {
          return '' + i
        }
      }
      return '' + 0
    },
    selectFoods () {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push({
              price: food.price,
              count: food.count
            })
          }
        })
      })
      return foods
    }
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.foodsScroll.on('scroll', pos => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    selectMenu (index, event) {
      console.log(index, event)
      // this.currentIndex = index
      // if (event.hasOwn)
      let foodList = this.$refs.foodList
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    },
    _calculateHeight () {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        const item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    addFood () {
      // console.log('123')
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    this.$http({
      method: 'get',
      baseURL: 'goods'
    }).then(res => {
      console.log(res)
      if (res.data.errno === 0) {
        this.goods = res.data.data
        // 页面渲染完成才会执行
        this.$nextTick(() => {
          this._initScroll()
          this._calculateHeight()
        })
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #ffffff
        font-weight 700
      .text
        border-none()
        display table-cell
        width 56px
        vertical-align middle
        border-1px(rgba(7,17,27,0.1))
        font-size 12px
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease {
            bg-image('./goods/decrease_3');
          }

          &.discount {
            bg-image('./goods/discount_3');
          }

          &.guarantee {
            bg-image('./goods/guarantee_3');
          }

          &.invoice {
            bg-image('./goods/invoice_3');
          }

          &.special {
            bg-image('./goods/special_3');
          }
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0

      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc,.extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>
