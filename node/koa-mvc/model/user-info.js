const md5 = require('md5')
const { query } = require('../util/index.js')
// 注册
const inserData = function (val) {
  console.log(val, '---------')
  // 数据库相关的 mysql sequlize
  let sql ='insert into user_info(name, password) value (?, ?)'
  // 哈希
  // 输出固定的 不可逆 同样的输入 同样的输出
  return query(sql,[val.name, md5(val.password)])
}

const queryByName = async (name) => {
  let sql = 'select * from user_info where name = ?'
  return query(sql, [ name ])
}

module.exports = {
  inserData,
  queryByName
}