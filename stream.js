// node 读写文件

// const fs = require('fs');
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('index.txt')

// // 设置编码为true 
// readerStream.setEncoding('UTF8')

// // 处理流事件 --> data,end,and error 
// readerStream.on('data',function(chunk){
//   data += chunk;
// })

// readerStream.on('end',function(){
//   console.log(data)
// })

// readerStream.on('error',function(err){
//   console.log(err.stack)
// })

// console.log('程序执行完毕')

// var data1 = '测试写入demo'

// //创建一个可以写入的流，写入到文件 output.txt中
// var writerStream  = fs.createWriteStream('output.txt');

// //使用utf8编码写入数据
// writerStream.write(data1,'UTF8');

// //标记文件末尾
// writerStream.end();

// //处理流事件 ==> data,end,and error 
// writerStream.on('finish',function(){
//   console.log('写入完成')
// })

// writerStream.on('error',function(err){
//   console.log(err.stack);
// })

// console.log("写入程序执行完毕")

// const fs = require('fs');
// var data = '';
// var data1= '测试写入demo';

// var readerStream = fs.createReadStream('index.txt');
// var writerStream = fs.createWriteStream('output.txt');
// readerStream.setEncoding('UTF8');
// readerStream.on('data',function(chunk){
//   data+= chunk;
//   data1+=data+'\n';
//   console.log(data1,'data1')
//   writerStream.write(data1,'UTF8');
// })
// console.log('写入程序执行完毕')

const fs = require('fs');
// 创建一个可读流
var readerStream = fs.createReadStream('index.txt');

//创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写
readerStream.pipe(writerStream);

console.log('程序执行完毕')
