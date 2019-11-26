var fs = require('fs');

fs.readFile('index.txt',function (err, data) {
  if(err){
    console.log(err.stack);
    return
  }
  console.log(data.toString())
})
console.log('程序执行完毕')