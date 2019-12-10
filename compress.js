const fs = require('fs');
const zlib = require('zlib');

// 压缩文件 createGzip() .gz
//  fs.createReadStream('index.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))
//  console.log('文件压缩完成')

 // 解压文件 createGunzip()
 fs.createReadStream('index.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('index1.txt'))
