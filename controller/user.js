const {
  wx
} = require('../config')
const jwt = require('jsonwebtoken')
const userModel = require('../models/user')
const axios = require('../utils/fetch')
module.exports = {
  async auth(ctx, next) {
    let {
      code
    } = ctx.request.query
    try {
      let {
        data
      } = await axios.get(wx.authUrl, {
        appid: wx.appID,
        secret: wx.secret,
        js_code: code,
        grant_type: wx.grant_type
      })

      let {
        openid,
        session_key
      } = data
      data ? ctx.send({
        openid,
      }) : ctx.sendError({
        msg: '获取openid失败'
      })
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async getToken(ctx, next) {
    let {
      openid,
      userInfo
    } = ctx.request.body
    try {
      let user = await ctx.findOne(userModel, {
        openid: openid
      })
      if (!user) {
        let userData = {
          openid,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          gender: userInfo.gender
        }
        await ctx.add(userModel, userData)
      }
      let payload = {
        nickName: userInfo.nickName,
        openid: user.openid,
      }
      // 生成签名有效期
      let token = jwt.sign(payload, wx.secret, {
        expiresIn: '30 days'
      })
      ctx.send({
        token
      })
    } catch (error) {
      ctx.sendError(error)
    }
  },
  async getUserInfo(ctx, next) {
    let {openid} = ctx.request.query
    try {
      let user = await ctx.findOne(userModel, {
        openid: openid
      })
      ctx.send(user)
    } catch (error) {
      ctx.sendError(error)
    }
  }
}
