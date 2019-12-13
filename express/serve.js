var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.use('/pulic',express.static('public'));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/' + "index.html");
})

app.get('/getInfo', function(req, res){
  var response = {
    "first_name":req.query.first_name,
    "last_name":req.query.last_name
  }
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8081, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})