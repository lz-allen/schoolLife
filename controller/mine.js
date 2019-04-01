const publishModel = require('../models/publish')
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
  }

} 