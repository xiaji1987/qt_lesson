const Router = require('koa-router')
const controllers = require('../controllers/index')
const router = new Router()
router.prefix('/lm')

// 首页相关的接口
router.get('/index/index', controllers.home.index)

// 搜索相关接口
router.post('/search/addhistoryaction', controllers.search.index.addhistoryAction)

// 获取历史搜素数据
router.get('/search/indexaction', controllers.search.index.indexAction)

// 清除历史纪录
router.post('/search/clearhistoryAction', controllers.search.index.clearHistoryAction)

// 搜索提示接口
router.get('/search/helperaction', controllers.search.index.helperAction)

// 商品详情
router.get('/goods/detailaction', controllers.goods.index.detailAction)
router.get('/goods/goodsList', controllers.goods.index.goodsList)

// 收藏相关的接口
router.post('/collect/addcollect', controllers.collect.index.addCollect)

// 订单相关的接口
router.post('/order/submitAction', controllers.order.index.submitAction)
router.get('/order/detailAction', controllers.order.index.detailAction)

// 购物车相关的接口
router.post('/cart/addCart', controllers.cart.index.addCart)
router.get('/cart/cartList', controllers.cart.index.cartList)

// 收货地址相关的接口
router.get('/address/getListAction', controllers.address.index.getListAction)
router.get('/address/detailAction', controllers.address.index.detailAction)
router.post('/address/saveAction', controllers.address.index.saveAction)

// 专题接口
router.get('/topic/listaction', controllers.topic.index.listAction)
router.get('/topic/detailaction', controllers.topic.index.detailAction)

// 分类相关的接口
router.get('/category/categoryNav', controllers.category.index.categoryNav)

module.exports = router