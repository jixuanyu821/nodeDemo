const http = require('http');
const querystring = require('querystring');
const util = require('util');


// http.createServer(function(req,res){
//   // 定义了一个post 变量，用于暂存请求体的信息
//   var post = "";
//   req.on('data',function(chunk){
//     post += chunk;
//   })
//   req.on('end',function(){
//     post = querystring.parse(post);
//     res.end(util.inspect(post));
//   })
// }).listen(3000);

var domHtml = '<html><head><meta charset="utf-8"><title>post测试</title></head>' +
  '<body>' +
  '<form method="post">' +
  '名字：<input name="name"><br>' +
  '年龄：<input name="age"><br>' +
  '<input type="submit">提交' +
  '</form>' +
  '</body>' +
  '</html>';

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    body = querystring.parse(body);
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    if (body.name && body.age) {
      res.write('姓名' + body.name);
      res.write('<br>')
      res.write('年龄' + body.age)
    } else {
      res.write(domHtml)
    }
    res.end()
  })
}).listen(3000)
console.log('服务启动')

