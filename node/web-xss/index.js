const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const serve = require('koa-static');

const app = new Koa();

app.use(bodyParser());
app.use(serve(path.join(__dirname, './static/')));
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
router.get('/', async (ctx) => {
  console.log(ctx)
  const query = ctx.query
  const { xss } = query
  ctx.set('X-XSS-Protection', 0)
  await ctx.render('xss', {
    xss
  })
})

router.get('/comment123', async (ctx) => {
  await ctx.render('comment')
})
var caches = {}
router.get('/comment', async (ctx) => {
  function html_encode(s) {
    s.replace(/</g, '&lt;')
    s.replace(/>/g, '&gt;')
    return s
  }
  const { comment } =ctx.query
  caches.v = html_encode(comment)
  ctx.body = {
    code: 123
  }
})

router.get('/getcomment', async (ctx) => {
  ctx.body = {
    comment: caches.v
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080, () => {
  console.log('server is running 8080');
});
