module.exports = {
  interval: '30 * * * * *',
  handle() {
    console.log('定时任务 嘿嘿 每分钟第30秒执行一次' + new Date())
  }
}