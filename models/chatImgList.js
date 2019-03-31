const mongoose = require('../mongodb.js')
const chatImgListSchema = mongoose.Schema({
  pImg: String,
  price: String,
  openid: String,
  uniqueId: String,
  replyId: String,
  avatarUrl: String,
  replyUrl: String,
  nickName: String,
  status: String
})
module.exports = mongoose.model('chatImgList', chatImgListSchema)
