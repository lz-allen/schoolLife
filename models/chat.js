const mongoose = require('../mongodb.js')
const chatSchema = mongoose.Schema({
  openid: String,
  text: String,
  avatarUrl: String,
  replyId: String
})
module.exports = mongoose.model('chat', chatSchema)
