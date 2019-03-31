const chatModel = require('../models/chat')
const chatImgListModel = require('../models/chatImgList')
module.exports = {
  async getMessage(ctx, next) {
    try {
      let { openid, replyId,uniqueId } = ctx.request.query
      let data = await ctx.find(chatModel, {
        openid: openid,
        replyId: replyId,
        uniqueId: uniqueId
      })
      if (data) {
        ctx.send(data)
      }
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async sendMessage(ctx, next) {
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
  },
  async addChatImgList(ctx, next) {
    let params = ctx.request.body
    try {
      let { uniqueId } = params
      let info = await ctx.findOne(chatImgListModel, { uniqueId })
      if (!info) {
        let data = await ctx.add(chatImgListModel, params)
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
  async getChatImgList(ctx, next) {
    try {
      let { openid } = ctx.request.query
      let data = await ctx.find(chatImgListModel, {$or:[{'openid': openid},{'replyId': openid}]}, {
        _id: 0
      })
      if (data) {
        ctx.send(data)
      }
    } catch (error) {
      ctx.sendError(error)
    }
  }
}
