const mongoose = require('../mongodb.js')
const userSchema = mongoose.Schema({
  openid: String,
  nickName: String,
  avatarUrl: String,
  gender: Number
})
module.exports = mongoose.model('user', userSchema)
