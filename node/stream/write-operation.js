const fs = require('fs');
const zlib = require('zlib');//文件的压缩
const gzip = zlib.createGzip();
//创建一个可读流
const infile = fs.createReadStream('./sample.txt');
const outfile = fs.createWriteStream('./sample.txt.gz');
infile.pipe(gzip).pipe(outfile);