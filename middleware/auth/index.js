const jwt = require('jsonwebtoken')
const conf = require('../../config.js')

module.exports = () => {
  return async (ctx, next) => {
    if (ctx.path.indexOf('auth') < 0 && ctx.path.indexOf('getToken') < 0 && ctx.path.indexOf('images') < 0) {
      let token = ctx.header.token
      if (!token) {
        ctx.sendError('token验证失败, 请重新登录!')
        return
      }
      try {
        jwt.verify(token, conf.wx.secret)
      } catch (error) {
        if ('TokenExpiredError' === e.name) {
          ctx.sendError('token已过期, 请重新登录!')
          ctx.throw(401, 'token expired,请及时本地保存数据！')
        }
        ctx.sendError('token验证失败, 请重新登录!')
        ctx.throw(401, 'invalid token')
      }
    }
    await next()
  }
}
