const path = require('path')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const send = require('./send')
const func = require('./func')
const auth = require('./auth')
const Rule = require('./rule')

module.exports = app => {
  // middlewares
  onerror(app)

  // 缓存拦截
  app.use(async (ctx, next) => {
    if (ctx.url === '/favicon.ico') return
    await next()
    ctx.status = 200
    ctx.set('Cache-Control', 'must-revalidation')
    if (ctx.fresh) {
      ctx.status = 304
      return
    }
  })
  app.use(logger())
  app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }))
  app.use(send())
  app.use(func())
  app.use(auth())
  app.use(require('koa-static')(__dirname + '/../public'))
  // error-handling
  Rule({
    app,
    path: path.join(__dirname, '../controller')
  })
  global.lzf = '1223'
  // websocket
  // app.ws.use(websocket)

  app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
  })
}
