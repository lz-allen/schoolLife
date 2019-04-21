const path = require('path')
const publishModel = require('../models/publish')

module.exports = {
  async insertList(ctx, next) {
    let params = ctx.request.body
    try {
      let data = await ctx.add(publishModel, params)
      data ? ctx.send(
        '发布成功'
      ) : ctx.sendError(
        '发布失败'
      )
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async updatePublishItem(ctx, next) {
    let params = ctx.request.body
    const {_id} = params 
    delete params._id
    try {
      let data = await ctx.update(publishModel,{_id}, params)
      data ? ctx.send(
        '修改成功'
      ) : ctx.sendError(
        '修改失败'
      )
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async upload(ctx, next) {
    let opts = {
      path: path.resolve(__dirname, '../public')
    }
    let result = await ctx.uploadFile(ctx, opts)
    if (result) {
      ctx.body = result
    }
  },
  async deleteImg(ctx, next) {
    let {
      filepath
    } = ctx.request.body
    try {
      let data = await ctx.deleteFile(filepath)
      ctx.send(
        data
      )
    } catch (error) {
      ctx.sendError(error.msg)
    }
  },
  async getList(ctx, next) {
    let {
      pageSize = 6,
      currentPage = 1,
      type
    } = ctx.request.query
    let conditions = {
    }
    type && (conditions['type']= type);
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
  async getItemById(ctx, next) {
    let params = ctx.request.query
    try {
      let data = await ctx.findOne(publishModel, params)
      ctx.send(data)
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async deleteItemById(ctx, next) {
    let params = ctx.request.body
    try {
      let data = await ctx.remove(publishModel, params)
      data ? ctx.send(
        '删除成功'
      ) : ctx.sendError(
        '删除失败'
      )
    } catch (error) {
      ctx.sendError(error)
    }
  }
}
