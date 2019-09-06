<template>
  <div class="header">
    <div class="content-wrapper">
      <!-- 头像 -->
      <div class="avatar">
        <img :src="seller.avatar" alt width="64" height="64" />
      </div>
      <!-- 右侧描述 -->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊</span>
        </div>
        <div class="description">蜂鸟专送/38分钟送达</div>
        <div class="support">
          <span class="icon"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div class="support-count">
        <span class="count">5个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: []
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin';

.header {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  background: rgba(7, 17, 27, 0.5);

  .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 20px;
    font-size: 0;

    .avatar {
      display: inline-block;
      vertical-align: top;

      img {
        border-radius: 2px;
      }
    }

    .content {
      display: inline-block;
      margin-left: 16px;

      .title {
        margin: 2px 0 8px 0;

        .brand {
          display: inline-block;
          vertical-align: top;
          width: 30px;
          height: 18px;
          bg-image('./header/brand');
          background-size: 30px 18px;
          background-repeat: no-repeat;
        }

        .name {
          margin-left: 16px;
          font-size: 16px;
          line-height: 18px;
          font-size: bold;
        }
      }

      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }
    }
  }
}
</style>
