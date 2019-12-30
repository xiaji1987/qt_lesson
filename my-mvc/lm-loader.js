const fs = require('fs')
const path = require('path')
const Router = require('koa-router')


// 读取目录文件
function load(dir, cb) {
  // 获取文件的绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url)
  // console.log(files)
  // 遍历
  files.forEach((fileName) => {
    // 去掉扩展名
    fileName = fileName.replace('.js', '')
    const file = require(url + '/' + fileName)
    // console.log(file)
    cb(fileName, file)
  })
}



// 加载路由
function initRouter(app) {
  const router = new Router()
  load('routes', (fileName, routes) => {
    const prefix = fileName === 'index' ? '' : `/${fileName}`
    routes = typeof routes === 'function' ? routes(app) : routes
    // console.log(routes)
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')
      // console.log(`正在映射地址:${method.toLocaleUpperCase()} ${prefix}${path}`)

      // 注册路由
      // app.get('/', ctx => {})
      // router[method](prefix + path, routes[key])
      router[method](prefix + path, async ctx => {
        app.ctx = ctx
        await routes[key](app)
      })
    })
  })
  return router
}


function initController() {
  const controllers = {}
  // 读取控制器目录
  load('controller', (filename, controller) => {
    // 添加路由
    controllers[filename] = controller
  })
  // console.log(controllers)
  return controllers
}

function initService() {
  const services = {}
  // 读取控制器目录
  load('service', (filename, service) => {
    // 添加路由
    services[filename] = service
  })
  // console.log(controllers)
  return services
}

const Sequelize = require('sequelize')
function loadConfig(app) {
  load('config', (filename, conf) => {
    // console.log(conf.db)
    if(conf.db) {
      app.$db = new Sequelize(conf.db) // 初始化db操作的
      // 加载模型
      app.$model = {}
      load('model', (filename, { schema, options }) => {
        app.$model[filename] = app.$db.define(filename, schema, options) // 将sequlize一个个模型全部加载起来
      })
      app.$db.sync() // 模块同步
    }
  })
}

module.exports = {
  initRouter,
  initController,
  initService,
  loadConfig
}






// load('routes', (fileName) => console.log('routes:' + fileName))
// initRouter()
// initController()
