const fs = require('fs')
const glob = require('glob')

// js文件的拷贝
var callbackFile = function (src, dst) {
  fs.readFile(src, 'utf-8', function (error, data) {
    if(error) {
      console.log(error)
      return false
    }
    if (dst.includes('.map')) {
      // 删除map
      // 删除js
    } else {
      callbackFile(dst, `${dst}.map`)
    }
    fs.writeFile(dst, data.toString(), 'utf-8', function(error, data) {
      if(error) {
        console.log(error)
        return false
      }
      console.log('写入成功')
      fs.unlink(src, function () { //复制js 在删除js

      })
    })
  })
}

glob.sync('./dist/css/*.js').forEach((filepath, name) => {
  let fileNameList = filepath.split('.')
  let fileName = fileNameList[1].split('/')[3] // 多页面的页面目录
  let copyName = filepath.split('/')[3]
  let changeDirectory = `./dist/${fileName}/js`
  if (fileName.includes('chunk-vendors')) {
    fs.exists(changeDirectory, function (exists) {
      if (exists) {
        callbackFile(filepath, `${changeDirectory}/${copyName}`)
      } else {
        fs.mkdir(changeDirectory, function () {
          callbackFile(filepath, `${changeDirectory}/${copyName}`)
        })
      }
    })
  }
})