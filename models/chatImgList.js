const mongoose = require('../mongodb.js')
const chatImgListSchema = mongoose.Schema({
  pImg: String,
  uniqueId: String,
  avatarUrl: String,
  nickName: String,
  status: String
})
module.exports = mongoose.model('chatImgList', chatImgListSchema)
