const mongoose = require('../mongodb.js')
const addressSchema = mongoose.Schema({
  openid: String,
  name: String,
  province: String,
  tel: String,
  detailAddr: String,
  main: Boolean
})
module.exports = mongoose.model('address', addressSchema)
