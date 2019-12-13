var express = require('express');
var app = express();
var util = require('util')

app.get('/',function(req, res){
  res.send('hello world')
})

var server = app.listen(8081,function(){
  var host = server.address().address
  var port = server.address().port;
  console.log(util.inspect(server.address())) 
  console.log("应用实例，访问地址为 http://%s:%s",host,port)
})

