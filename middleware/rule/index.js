const Path = require('path')
const fs = require('fs')

module.exports = options => {
  let {
    app,
    path
  } = options
  if (!app) {
    throw new Error('app参数必须要有')
  }
  const appAllKeys = Object.keys(app)
  fs.readdirSync(path).forEach(filename => {
    let extname = Path.extname(filename) //返回path路径文件扩展名，如果path以 ‘.' 为结尾，将返回 ‘.'
    if (extname === '.js') {
      let name = Path.basename(filename, extname) // 提取出用 ‘/' 隔开的path的最后一部分  这里就是文件名
      if (appAllKeys.includes(name)) {
        throw new Error(`${name}已经存在`) //防止方法覆盖
      }
      app[name] = require(Path.join(path, filename))
      app[name].filename = filename
    }
  })
}
