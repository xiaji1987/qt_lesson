requirejs.config({
  paths: {
    jq: './jq',
    swiper: './swiper'
  }
})
// require(['jq'], (jq) => {
//   document.getElementById('btn').addEventListener('click', () => {
//     require(['swiper'], (swiper) => {
//       console.log(1)
//     })
//   })
// })
require(['./seaMain.js'], (seaMain) => {})