- express 开发框架
  先安装， app = express();
  app.get('/'， function(req. res) {
      文件操作
  });定义一个GET请求，path /
  app.listen(3000);

- 完成表单
  action="/upload" method="POST"

- 上传文件
  express 开发框架
  multer 文件上传专用的包 npm npm 开发中， 开源的那些工具/包
  npm install multer
  - 存储的地址 /upload
  - 文件名 Date.now() 时间戳