const port = '3000'
module.exports = {
  env: process.env.NODE_ENV,
  port,
  mongodb: {
    username: 'lzf',
    pwd: '090623Boy',
    address: '106.15.206.236:27017',
    db: 'schoolLife',
    authSource: 'schoolLife'
  },
  wx: {
    authUrl: 'https://api.weixin.qq.com/sns/jscode2session',
    appID: 'wx4506f86721d6d84b',
    secret: '6526bad68af202d4bd64aad440a2936e',
    grant_type: 'authorization_code'
  }
}
