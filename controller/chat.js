const chatModel = require('../models/chat')
module.exports = {
  async sendMssage(ctx, next) {
    let params = ctx.request.body
    try {
      let data = await ctx.add(chatModel, params)
      data ? ctx.send(
        '发送成功'
      ) : ctx.sendError(
        '发送失败'
      )
    } catch (error) {
      ctx.sendError(error)
    }
  }
}
