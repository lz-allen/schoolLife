const Koa = require('koa')
const app = new Koa()
const Middleware = require('./middleware')
const Router = require('./routes')

require('./mongodb')
Middleware(app)
Router(app)

module.exports = app
