<template>
  <div class="rating">
    <div class="rating-score">
      <div class="score-left">
        <h1 class="score">{{avgScore}}</h1>
        <div class="title">综合评分</div>
        <div class="rank">高于周边商家62.6%</div>
      </div>
      <div class="score-right">
        <div class="service-level">
          <span class="service-title">服务态度</span>
          <div class="service-star">
            <star :score="4" :size="36"/>
          </div>
          <span class="service-score">4</span>
        </div>
        <div class="commodity-score">
          <span class="commodity-title">商品评分</span>
          <div class="commodity-star">
            <star :score="4.3" :size="36"/>
          </div>
          <span class="commodity-score">4.3</span>
        </div>
        <div class="service-time">
          <span class="time-title">送达时间</span>
          <span class="time-delivery">38分钟</span>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <div class="rating-comment">
      <div class="comment-header">
        <span class="active" @click="active">
          全部
          <span class="count">{{ratings.length}}</span>
        </span>
        <span class="position" @click="position">
          满意
          <span class="count">{{satNum}}</span>
        </span>
        <span class="negative" @click="negative">
          不满意
          <span class="count">{{ratings.length - satNum}}</span>
        </span>
      </div>
      <div class="comment-bottom">
        <i class="icon-check_circle"></i>
        <span class="comment-text">只看有内容的评价</span>
      </div>
    </div>
    <div class="rating-wrapper">
      <ul>
        <li class="wrapper-item" v-for="(item,index) in ratings" :key="index">
          <div class="avator">
            <img :src="item.avatar" alt="">
          </div>
          <div class="wrapper-content">
            <h1 class="content-name">{{item.username}}</h1>
            <div class="wrapper-star">
              <star :score="item.score" :size="24"/>
            </div>
            <span class="wrapper-delivery">{{item.deliveryTime}}</span>
            <p class="wrapper-text">{{item.text}}</p>
            <div class="wrapper-time">2016-3-17 21:21</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import star from '@/star/star'
export default {
  name: 'ratings',
  data () {
    return {
      ratings: []
    }
  },
  components: {
    star: star
  },
  created () {
    this.$http({
      method: 'get',
      baseURL: 'ratings'
    }).then(res => {
      console.log(res)
      if (res.data.errno === 0) {
        this.ratings = res.data.data
      }
    })
  },
  computed: {
    avgScore () {
      console.log(this.ratings);
      let score = 0;
      for(let item of this.ratings){
        score += item.score;
      }
      let avgscore = score / this.ratings.length;
      return avgscore.toFixed(1);
    },
    satNum () {
      let count = 0;
      for(let item of this.ratings){
        if(item.score > 3){
          count++;
        }
      }
      return count;
    }
  },
  methods: {
    active (event) {
      console.log(event);
    },
    position (event) {
      console.log(event);
    },
    negative (event) {
      console.log(event);
    }
  },
}
</script>

<style scoped>
.ratings{
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
}
.rating-score{
  padding: 18px 0;
  display: flex;
}
.score-left{
  width: 137px;
  border-right: 1px solid rgba(7,17,27,.1);
  text-align: center;
  padding: 6px 0;
}
.score{
  margin-bottom: 6px;
    line-height: 28px;
    font-size: 24px;
    color: #f90;
}
.title {
    margin-bottom: 8px;
    line-height: 12px;
    font-size: 12px;
    color: #07111b;
}
.rank {
    line-height: 10px;
    font-size: 10px;
    color: #93999f;
}
.score-right{
  padding: 6px 0px 6px 24px;
}
.service-level{
  margin-bottom: 8px;
  font-size: 0;
}
.service-title{
  display: inline-block;
  line-height: 18px;
  vertical-align: top;
  font-size: 12px;
  color: #07111b;
}
.service-star{
  display: inline-block;
  margin: 0 12px;
  vertical-align: top;
}
.service-score{
  display: inline-block;
  line-height: 18px;
  vertical-align: top;
  font-size: 12px;
  color: #f90;
}
.commodity-score{
  margin-bottom: 4px;
}
.commodity-title{
  display: inline-block;
  line-height: 18px;
  vertical-align: top;
  font-size: 12px;
  color: #07111b;
}
.commodity-star{
  display: inline-block;
  margin: 0 12px 0 8px;
  vertical-align: top;
  height: 15px;
}
.commodity-score{
  display: inline-block;
  line-height: 18px;
  vertical-align: top;
  font-size: 12px;
  color: #f90;
  overflow: hidden;
}
.time-title{
  line-height: 18px;
  font-size: 12px;
  color: #07111b;
}
.time-delivery{
  margin-left: 12px;
  font-size: 12px;
  color: #93999f;
}
.split{
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7,17,27,.1);
  border-bottom: 1px solid rgba(7,17,27,.1);
  background: #f3f5f7;
}
.rating-comment{
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}
.comment-header{
  padding: 18px 0;
  margin: 0 18px;
  position: relative;
  font-size: 0;
}
.comment-header>span{
  display: inline-block;
  padding: 8px 12px;
  margin-right: 8px;
  line-height: 16px;
  border-radius: 1px;
  font-size: 12px;
}
.active{
  background: #00a0dc;
  color: #fff;
}
.count{
  font-size: 8px;
}
.position{
  background: rgba(0,160,220,.2);
}
.negative{
  background: rgba(77,85,93,.2);
}
.comment-bottom{
  padding: 12px 18px;
  line-height: 24px;
  border-bottom: 1px solid rgba(7,17,27,.1);
  color: #93999f;
  font-size: 0;
}
.icon-check_circle{
  display: inline-block;
  vertical-align: top;
  margin-right: 4px;
  font-size: 24px;
  color: #00c850;
}
.comment-text{
  display: inline-block;
  font-size: 12px;
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: normal;
  line-height: 24px;
  color: #93999f;
}
.rating-wrapper{
  padding: 0 18px;
}
.wrapper-item{
  list-style: none;
  display: flex;
  padding: 18px 0;
  border-bottom: 1px solid #93999f;
}
.avator{
  flex: 0 0 28px;
  width: 28px;
  margin-right: 12px;
}
.avator img{
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
.wrapper-content{
  flex: 1;
  position: relative;
}
.content-name{
  margin-bottom: 4px;
  line-height: 12px;
  font-size: 10px;
  color: #07111b;
}
.wrapper-star{
  margin-bottom: 6px;
  font-size: 0;
  display: inline-block;
  margin-right: 6px;
  vertical-align: top;
}
.wrapper-delivery{
  display: inline-block;
  vertical-align: top;
  line-height: 12px;
  font-size: 10px;
  color: #93999f;
}
.wrapper-text{
  margin-bottom: 8px;
  line-height: 18px;
  color: #07111b;
  font-size: 12px;
}
.wrapper-time{
  position: absolute;
  top: 0;
  right: 0;
  line-height: 12px;
  font-size: 10px;
  color: #93999f;
}
</style>
