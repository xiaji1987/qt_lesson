const { mysql } = require('../../mysql')

async function helperAction (ctx) {
  const keyword = ctx.query.keyword
  var order = ctx.query.order
  if (!order) {
    order = '',
    orderBy = 'id'
  } else {
    orderBy = 'retail_price'
  }
  const keywords = await mysql('nideshop_goods').orderBy(orderBy, order)
  .column('id', 'name', 'list_pic_url', 'retail_price')
  .where('name', 'like', '%' + keyword + '%').limit(10).select()
  if (keywords) {
    ctx.body = {
      keywords
    }
  } else {
    ctx.body = {
      keywords: []
    }
  }
}

async function clearHistoryAction (ctx) {
  const { openId } = ctx.request.body

  const data = await mysql('nideshop_search_history').where({
    'user_id': openId
  }).del()
  if (data) {
    ctx.body = {
      'data': '清除成功'
    }
  } else {
    ctx.body = {
      'data': null
    }
  }
}

async function indexAction (ctx) {
  const openId = ctx.query.openId
  // 默认关键字
  const defaultKeyword = await mysql('nideshop_keywords').where({
    is_default: 1
  }).limit(1).select()
  // 取出热门关键字
  const hotKeywordList = await mysql('nideshop_keywords').distinct('keyword').column('keyword', 'is_hot').limit(10).select()
  const historyData = await mysql('nideshop_search_history').where({
    user_id: openId
  }).limit(10).select()
  ctx.body = {
    'defaultKeyword': defaultKeyword[0],
    'hotKeywordList': hotKeywordList,
    'historyData': historyData
  }
}

async function addhistoryAction (ctx) {
  const { openId, keyword } = ctx.request.body
  // console.log(openId, keyword)
  const oldData = await mysql('nideshop_search_history').where({
    'user_id': openId,
    'keyword': keyword
  })

  if (oldData.length == 0) {
    const data = await mysql('nideshop_search_history').insert({
      'user_id': openId,
      'keyword': keyword,
      'add_time': parseInt(new Date().getTime() / 1000)
    })
    if (data) {
      ctx.body = {
        data: 'success'
      }
    } else {
      ctx.body = {
        data: 'fail'
      }
    }
  } else {
    ctx.body = {
      data: '已经有记录了'
    }
  }
}

module.exports = {
  addhistoryAction,
  indexAction,
  clearHistoryAction,
  helperAction
}