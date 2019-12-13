const http = require('http');
const url = require('url');
const util = require('util');

http.createServer(function(req,res){
  res.writeHead(200,{"Content-type":"text/plain;charset=utf-8"});
  res.write(util.inspect(url.parse(req.url,true)));
  res.write("\n");
  res.write("\n");
  res.write("\n");
  var params = url.parse(req.url,true).query;
  res.write('名字'+params.name);

  res.end()
}).listen(3000)
console.log('程序运行')
