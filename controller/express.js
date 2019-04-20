const axios = require('axios')
module.exports = {
  async getExpressList(ctx, next) {
    try {
      let { word } = ctx.request.query
      // let { data } = await axios.get('http://wuliu.market.alicloudapi.com/kdi',
      //   {
      //     headers: {
      //       Authorization: 'APPCODE c48c6594d5474440a39bfd7530561b96',
      //     },
      //     params: {
      //       no: word
      //     },
      //   }
      // )
      ctx.send({ "code": 0, "data": { "status": "0", "msg": "ok", "result": { "number": "75132182404811", "type": "zto", "list": [{ "time": "2019-03-05 10:40:17", "status": "【上海市】  快件已在 【三林二部】 签收, 签收人: 家人, 如有疑问请电联:15335256581 / 021-50308526, 您的快递已经妥投。风里来雨里去, 只为客官您满意。上有老下有小, 赏个好评好不好？【请在评价快递员处帮忙点亮五颗星星哦~】" }, { "time": "2019-03-05 09:29:52", "status": "【上海市】  快件已到达 【三林二部】（021-50308526）,业务员 业务员孙太杰（15335256581） 正在第1次派件, 请保持电话畅通,并耐心等待" }, { "time": "2019-03-05 04:40:22", "status": "【上海市】  快件离开 【上海浦东中心】 已发往 【三林二部】" }, { "time": "2019-03-05 04:34:14", "status": "【上海市】  快件已经到达 【上海浦东中心】" }, { "time": "2019-03-04 03:50:11", "status": "【东莞市】  快件离开 【虎门中心】 已发往 【上海浦东中心】" }, { "time": "2019-03-04 03:48:34", "status": "【东莞市】  快件已经到达 【虎门中心】" }, { "time": "2019-03-04 01:00:48", "status": "【深圳市】  快件离开 【福田华强】 已发往 【上海浦东中心】" }, { "time": "2019-03-03 22:28:11", "status": "【深圳市】  【福田华强】（0755-25949752、0755-82666076） 的 连环马 （18123848413） 已揽收" }], "deliverystatus": "3", "issign": "1", "expName": "中通快递", "expSite": "www.zto.com ", "expPhone": "95311", "logo": "http://img3.fegine.com/express/zto.jpg", "courier": "", "courierPhone": "15335256581" } }, "msg": "success" })
    } catch (error) {
      ctx.sendError(error)
    }
  }
}