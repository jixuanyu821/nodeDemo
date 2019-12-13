var fs = require('fs');

//fs.readFile  异步读取数据
fs.readFile('index.txt',function(err,data){
  if(err){
    return console.error(err)
  }
  console.log('异步读取'+ data.toString())
})

//fs.readFileSync 同步读取数据
var data = fs.readFileSync('index.txt');
console.log('同步读取'+data.toString())
