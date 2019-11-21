const Router = require('koa-router')
const { findById, createShop } = require('./controller')
const router = new Router({
  'prefix': '/api'
})
router.post('/', createShop)
router.get('/shop/:id', findById)
module.exports = router