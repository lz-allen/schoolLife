const Koa = require('koa')
const websockify = require('koa-websocket')
const app = websockify(new Koa());
const Middleware = require('./middleware')
const Router = require('./routes')

require('./mongodb')
Middleware(app)
Router(app)

module.exports = app
