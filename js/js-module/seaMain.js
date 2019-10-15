define(function (require) {
  var jq = require('./jq');
  jq.$();
  var swiper = require('./swiper')
  swiper.swiper();
  return {};
})