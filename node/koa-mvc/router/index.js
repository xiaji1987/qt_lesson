const KoaRouter = require("koa-router")
const registerController = require('../controller/register.js')
const loginController = require('../controller/login.js')
const router = new KoaRouter()

router.prefix('/api/v1')
router.post('/login', loginController)
router.get('/register', registerController)

module.exports = router;