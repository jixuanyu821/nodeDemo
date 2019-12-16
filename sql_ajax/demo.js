// node Demo 从sql数据库获取数据并通过ajax访问

var express = require('express');
var mysql = require('mysql');
var url = require('url');
var http = require('http');
var util = require('util');
var app = express();
var bodyParser = require('body-parser');// express http post 请求解析中间件

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // *表示可以进行跨域操作
  res.header('Access-Controt-Allow-Header', 'X-Requested-With,Content-Type'); //可以支持的消息
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS'); // 支持的提交方式
  res.header("Access-Control-Allow-Credentials", true);
  res.header("X-Powered-By", ' 3.2.1');
  res.header('Content-Type', 'application/json;chartset=utf-8'); //响应头定义
  next();
})

// 链接数据库
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'test'
})

connection.connect();


//查数据
function sqlGetInfo(res){
  var sql = 'SELECT * FROM websites;';
  connection.query(sql, function (err, result) {
    if (err) {
      console.log('[SELECT ERROR] - ', err.message);
      return
    }
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
    var data = result;
    res.send(data);// 发送
  })
}

function sqlAddInfo(parmas,res){
  var addSql = 'INSERT INTO websites(name,url,alexa,country) VALUES(?,?,?,?);';
  connection.query(addSql,parmas,function(err,result){
    if(err){
      console.log('[INSERT ERROR] - ' ,err.message);
      res.send({
        code:000,
        message:'error'
      });
      return
    }
    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);        
    console.log('INSERT ID:',result);        
    console.log('-----------------------------------------------------------------\n\n');
    res.send({
      code:200,
      message:'success'
    });
  })
}

app.get('/get', function (req, res) {
  console.log(req.url); // 打印请求数据
  var parseObj = url.parse(req.url, true); // 对url进行解析 第二个参数为true是会把query属性转为对象
  var queryObj = parseObj.query;
  res.status(200);
  sqlGetInfo(res);
})

app.use(bodyParser.urlencoded({extended:true}))// 用于解析表单数据
app.use(bodyParser.json())// 用于解析json 会自动选择最为适合的解析方式

app.post('/addTable',function (req,res) {
  var parmas = [];
  if(req.body.name&&req.body.name!=''){
    parmas[0] = req.name?req.name:'';
    parmas[1] = req.url?req.url:'';
    parmas[2] = req.alexa?req.alexa ==''?0:Number(req.alexa):0;
    parmas[3] = req.country?req.country:'';
    sqlAddInfo(parmas,res);
  }else{
    res.json({
      code:200,
      message:'姓名不能为空'
    })
  }
})

var server = app.listen('4000',function(){
  var port = server.address().port;
  console.log("应用实例，访问port :%s" , port)
})