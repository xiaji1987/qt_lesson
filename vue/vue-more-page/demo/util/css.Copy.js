const fs = require('fs')
const glob = require('glob')

// css文件的拷贝
var callbackFile = function (src, dst) {
  fs.readFile(src, 'utf-8', function (error, data) {
    if(error) {
      console.log(error)
      return false
    }
    fs.writeFile(dst, data.toString(), 'utf-8', function(error, data) {
      if(error) {
        console.log(error)
        return false
      }
      console.log('写入成功')
      fs.unlink(src, function () { //复制css 在删除css

      })
    })
  })
}

glob.sync('./dist/css/*.css').forEach((filepath, name) => {
  let fileNameList = filepath.split('.')
  let fileName = fileNameList[1].split('/')[3] // 多页面的页面目录
  let copyName = filepath.split('/')[3]
  let changeDirectory = `./dist/${fileName}/css`
  fs.exists(changeDirectory, function (exists) {
    if (exists) {
      callbackFile(filepath, `${changeDirectory}/${copyName}`)
    } else {
      fs.mkdir(changeDirectory, function () {
        callbackFile(filepath, `${changeDirectory}/${copyName}`)
      })
    }
  })
})