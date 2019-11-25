var http = require('http');
// var express = require('experss');
http.createServer((requste,response)=>{
  response.writeHead(200,{"Content-type":'text/plain'});
  response.end('success');
}).listen(8000)
console.log('server run localhost:8888');