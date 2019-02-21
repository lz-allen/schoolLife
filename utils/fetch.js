const axios = require('axios')
module.exports = {
  get(url, params) {
    return axios({
      method: 'get',
      url: url,
      params
    })
  },
  post(url, params) {
    return axios({
      method: 'post',
      url: url,
      data: params
    })
  }
}
