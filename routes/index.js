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
  router.post('/updatePublishHidden', app.publish.updatePublishHidden)

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
  router.post('/deleteChatImgList', app.chat.deleteChatImgList)

  // 创建订单
  router.post('/createOrder', app.order.createOrder)
  router.get('/getBuyList', app.order.getBuyList)
  router.get('/getSellList', app.order.getSellList)
  router.get('/getOrderItem', app.order.getOrderItem)
  router.post('/updateOrderItem', app.order.updateOrderItem)
  router.post('/deleteOrderItem', app.order.deleteOrderItem)

  // 我发布的
  router.get('/getPublishList', app.mine.getPublishList)
  // 创建收货信息
  router.post('/createAddress', app.mine.createAddress)
  router.get('/getAddress', app.mine.getAddress)
  router.post('/deleteAddress', app.mine.deleteAddress)

  // 物流
  router.get('/getExpressList', app.express.getExpressList)
  
  app.use(router.routes()).use(router.allowedMethods())
}
