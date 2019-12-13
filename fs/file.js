const fs = require('fs');

// open 打开文件
// console.log('开始方法')
// fs.open('index.txt','r+',function(err,fd){
//   if(err){
//     return console.error(err);
//   }
//   console.log('文件打开成功')
// })

// stat() 写入文件
// console.log('准备打开文件');
// fs.stat('index.txt',function(err,stats){
//   if(err){
//     return console.log(err);
//   }
//   console.log(stats);
//   console.log('读取文件')
  
//   //检测文件类型
//   console.log("是否为文件" + stats.isFile())
//   console.log("是否为路径" + stats.isDirectory())
// })

// writeFile()写入文件
console.log('准备写入文件')
fs.writeFile('index.txt','我是通过fs.writeFile写入文件的内容',function(err){
  if(err){
    return console.error(err);
  }
  console.log('数据写入成功！');
  console.log('读取写入的数据');

  fs.readFile('index.txt',function(err,data){
    if(err){
      return console.error(err)
    }
    console.log('异步读取的数据'+ data.toString())
  })
})