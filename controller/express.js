const axios = require('axios')
module.exports = {
  async getExpressList(ctx, next) {
    try {
      let { word } = ctx.request.query
      let { data } = await axios.get('http://wuliu.market.alicloudapi.com/kdi',
        {
          headers: {
            Authorization: 'APPCODE c48c6594d5474440a39bfd7530561b96',
          },
          params: {
            no: word
          },
        }
      )
      ctx.send(data)
    } catch (error) {
      ctx.sendError(error)
    }
  }
}