const router = require('koa-router')()

module.exports = app => {
  // 用户
  router.get('/auth', app.user.auth)
  router.post('/getToken', app.user.getToken)
  router.get('/getUserInfo', app.user.getUserInfo)
  // 任务
  router.post('/insertList', app.publish.insertList)
  router.get('/getList', app.publish.getList)
  // 图片
  router.post('/upload', app.publish.upload)
  router.post('/delete', app.publish.deleteImg)

  // 发送消息
  router.post('/sendMessage', app.chat.sendMssage)
  app.use(router.routes()).use(router.allowedMethods())
}
