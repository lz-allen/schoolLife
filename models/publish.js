const mongoose = require('../mongodb.js')
const publishSchema = mongoose.Schema({
  nickName: String,
  avatarUrl: String,
  openid: String,
  desc: String,
  imgList: Array,
  address: String,
  type: String,
  isFree: String,
  price: String,
  mode: Array,
  publishTime: Date,
  isVisible: Boolean,
})
module.exports = mongoose.model('publish', publishSchema)
