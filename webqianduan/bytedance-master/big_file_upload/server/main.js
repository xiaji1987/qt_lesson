const http = require('http');
const path = require('path');
const multiparty = require('multiparty');
const fse = require('fs-extra');
const server = http.createServer();
const UPLOAD_DIR = path.resolve(__dirname, ".", "target");
server.on("request", async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  // res.end("hello");

  if (req.url == '/') {
    // chunk ,  name 
    const multipart = new multiparty.Form();
    // console.log(multipart);
    multipart.parse(req, async (err, fields, files) => {
      if (err) {
        return;
      }
      // console.log(files);
      const [chunk] = files.chunk; //拿到了文件块
      const [filename] = fields.filename; //文件名
      // console.log(filename);
      const dir_name = filename.split('-')[0];
      const chunkDir = path.resolve(UPLOAD_DIR, dir_name);
      console.log(chunkDir);
      if (!fse.existsSync(chunkDir)) {
        await fse.mkdirs(chunkDir);
      }
      // console.log(chunk.path);
      await fse.move(chunk.path, `${chunkDir}/${filename}`);
    })
  } else if (req.url == '/merge') {
    const filename = 'yinyue';
    const filePath = path.resolve(UPLOAD_DIR, "..", `${filename}.mp3`);
    const pipeStream = (path, writeStream) =>
      new Promise(resolve => {
        const readStream = fse.createReadStream(path);
        readStream.on("end", () => {
          fse.unlinkSync(path);
          resolve();
        })
        readStream.pipe(writeStream);
      })

    const mergeFileChunk = async (filePath, filename, size) => {
      // console.log(filePath, filename, size);
      // 大文件上传时， 设计的后端思想是 每个要上传的文件， 先以文件名，
      // 为target 目录名， 把分文件 blob, 放入这个目录，
      // 文件blob上传前要加上index 
      // node 文件合并肯定是可以的， stream
      const chunkDir = path.resolve(UPLOAD_DIR, filename);
      // console.log(chunkDir);
      const chunkPaths = await fse.readdir(chunkDir);
      // console.log(chunkPaths);
      chunkPaths.sort((a, b) => a.split("-")[1] - b.split("-")[1]);
      // console.log(chunkPaths, '++');
      // 每块内容写入最后的文件， promise 
      await Promise.all(
        chunkPaths.map((chunkPath, index) =>
          pipeStream(
            path.resolve(chunkDir, chunkPath),
            fse.createWriteStream(filePath, {
              start: index * size,
              end: (index + 1) * size
            })
          )
        )
      )
      console.log('文件合并成功');
      fse.rmdirSync(chunkDir);
    }
    mergeFileChunk(filePath, filename, 1024 * 1024);
  }
});

server.listen(3000, () => console.log("正在临听3000端口"));
