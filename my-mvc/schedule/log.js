module.exports = {
  interval: '*/3 * * * * *',
  handle() {
    console.log('定时任务 嘿嘿 三秒钟执行一次' + new Date())
  }
}