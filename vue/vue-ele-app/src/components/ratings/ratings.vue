<template>
  <div class="rating">
    <div class="rating-score">
      <div class="score-left">
        <h1 class="score">5</h1>
        <div class="title">sgfdsgfs</div>
        <div class="rank">vasbag</div>
      </div>
      <div class="score-right">
        <div class="service-level">
          <span class="service-title">服务态度</span>
          <div class="service-star">
            <span class="star1"></span>
            <span class="star"></span>
          </div>
          <span class="service-score">4</span>
        </div>
        <div class="commodity-score">
          <span class="commodity-title">商品评分</span>
          <div class="commodity-star">
            <span class="star"></span>
          </div>
          <span class="commodity-score">4</span>
        </div>
        <div class="service-time">
          <span class="time-title">送达时间</span>
          <span class="time-delivery"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
.star1{
  display: inline-block;
  background: url('./ratings/star1.png');
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
.star{
  display: inline-block;
  background: url('./ratings/star.png');
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
.service-score{
  display: inline-block;
  line-height: 18px;
  vertical-align: top;
  font-size: 12px;
  color: #f90;
}
</style>
