const router = require('koa-router')()

module.exports = app => {
  // 用户
  router.get('/auth', app.user.auth)
  router.post('/getToken', app.user.getToken)
  router.get('/getUserInfo', app.user.getUserInfo)
  // 任务
  router.post('/insertList', app.publish.insertList)
  router.get('/getList', app.publish.getList)
  router.get('/getItemById', app.publish.getItemById)
  router.post('/deleteItemById', app.publish.deleteItemById)
  router.post('/updatePublishItem', app.publish.updatePublishItem)
  
  // 图片
  router.post('/upload', app.publish.upload)
  router.post('/delete', app.publish.deleteImg)

  // 发送消息
  router.post('/sendMessage', app.chat.sendMessage)
  router.get('/getMessage', app.chat.getMessage)
  // 创建联系人列表
  router.post('/addChatImgList', app.chat.addChatImgList)
  router.get('/getChatImgList', app.chat.getChatImgList)
  router.get('/getChatImgListItem', app.chat.getChatImgListItem)

  // 创建订单
  router.post('/createOrder', app.order.createOrder)
  router.get('/getBuyList', app.order.getBuyList)

  // 我发布的
  router.get('/getPublishList', app.mine.getPublishList)
  app.use(router.routes()).use(router.allowedMethods())
}
