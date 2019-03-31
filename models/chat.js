const mongoose = require('../mongodb.js')
const chatSchema = mongoose.Schema({
  openid: String,
  text: String,
  uniqueId: String,
  avatarUrl: String,
  replyId: String
})
module.exports = mongoose.model('chat', chatSchema)
