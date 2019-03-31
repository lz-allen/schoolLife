const orderModel = require('../models/order')
module.exports = {
  async createOrder(ctx, next) {
    let params = ctx.request.body
    try {
      let { uniqueId } = params
      let info = await ctx.findOne(orderModel, { uniqueId })
      if (!info) {
        let data = await ctx.add(orderModel, params)
        data ? ctx.send(
          '创建成功'
        ) : ctx.sendError(
          '创建失败'
        )
      } else {
        ctx.send(
          'success'
        )
      }
    } catch (error) {
      ctx.sendError(error)
    }
  },
}