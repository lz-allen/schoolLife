const publishModel = require('../models/publish')
const addressModel = require('../models/address')
module.exports = {
  async getPublishList(ctx, next) {
    let {
      pageSize = 6,
      currentPage = 1,
      openid
    } = ctx.request.query
    let conditions = {
      openid: openid
    }
    try {
      let data = await ctx.findPage(publishModel, conditions, {}, {
        limit: pageSize * 1,
        skip: (currentPage - 1) * pageSize,
        sort: {
          publishTime: -1
        }
      })
      ctx.send(data)
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async createAddress(ctx, next) {
    let params = ctx.request.body
    try {
      let { _id, openid, main, update } = params
      if (update) {
        delete params.update
        delete params._id
        await ctx.update(addressModel, { _id }, params)
        if(main){
          await ctx.updateAll(addressModel, { _id: { $ne: _id } }, { $set: { main: false }},{ multi: true })
        }
        ctx.send(
          'success'
        )
        return
      }
      let info = await ctx.findOne(addressModel, { openid })
      if (!info) {
        params.main = true
        let data = await ctx.add(addressModel, params)
        data ? ctx.send(
          '创建成功'
        ) : ctx.sendError(
          '创建失败'
        )
      } else {
        let data = await ctx.add(addressModel, params)
        const { _id } = data
        if (main) {
          await ctx.updateAll(addressModel, { _id: { $ne: _id } }, { $set: { main: false }},{ multi: true })
        }
        ctx.send(
          'success'
        )
      }
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async getAddress(ctx, next) {
    let params = ctx.request.query
    try {
      let { openid } = params
      let info = await ctx.find(addressModel, { openid })
      ctx.send(info)
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async deleteAddress(ctx, next) {
    let params = ctx.request.body
    try {
      let { _id } = params
      let info = await ctx.remove(addressModel, { _id })
      ctx.send(info)
    } catch (error) {
      ctx.sendError(error)
    }
  }
} 