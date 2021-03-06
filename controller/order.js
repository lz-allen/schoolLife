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
  async getBuyList(ctx, next) {
    let {
      pageSize = 6,
      currentPage = 1,
      openid
    } = ctx.request.query
    try {
      let data = await ctx.findPage(orderModel, { openid }, {}, {
        limit: pageSize * 1,
        skip: (currentPage - 1) * pageSize,
        sort: {
          time: -1
        }
      })
      ctx.send(data)
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async getSellList(ctx, next) {
    let {
      pageSize = 6,
      currentPage = 1,
      openid
    } = ctx.request.query
    try {
      let data = await ctx.findPage(orderModel, { replyId: openid }, {}, {
        limit: pageSize * 1,
        skip: (currentPage - 1) * pageSize,
        sort: {
          time: -1
        }
      })
      ctx.send(data)
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async getOrderItem(ctx, next) {
    let params = ctx.request.query
    try {
      let { uniqueId } = params
      let info = await ctx.findOne(orderModel, { uniqueId })
      ctx.send(info)
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async deleteOrderItem(ctx, next) {
    let params = ctx.request.body
    try {
      let { uniqueId } = params
      let info = await ctx.remove(orderModel, { uniqueId })
      ctx.send(info)
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async updateOrderItem(ctx, next) {
    let params = ctx.request.body
    try {
      let { uniqueId, status, expressId } = params
      let data = await ctx.update(orderModel, { uniqueId }, { status, expressId })
      data ? ctx.send(
        '发货成功'
      ) : ctx.sendError(
        '发货失败'
      )
    } catch (error) {
      ctx.sendError(error)
    }
  },
}