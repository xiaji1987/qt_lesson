const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const multer = require('multer');
// 上传npm包的配置
const storage = multer.diskStorage({
    destination: function(res, file, cb) {
        cb(null, 'upload/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({
    storage: storage
}) 
app.get('/', function(req, res) {
    const form = fs.createReadStream(
        path.join(__dirname, 'index.html')
    );
    form.pipe(res);
});

//路由
app.post('/upload', upload.single('pic'), function(req, res) {
    console.log('要处理的表单');
    res.send({
        ret: 0
    })
})
app.listen(3000);