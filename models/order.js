const mongoose = require('../mongodb.js')
const orderSchema = mongoose.Schema({
  openid: String,
  uniqueId: String,
  replyId: String,
  replyName: String,
  status: String,
  price: String,
  pImg: String,
  desc: String,
})
module.exports = mongoose.model('order', orderSchema)
