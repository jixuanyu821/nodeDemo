/*
 * @Description: 
 * @Author: jixuanyu
 * @Date: 2020-04-21 15:28:59
 * @LastEditTime: 2020-04-21 17:15:43
 * @LastEditors: jixuanyu
 */
var fn_index= async(ctx,next) =>{
  ctx.response.body = `<h1>Index</h1>
  <form action="/signin" method="post">
    <label>name:</label><input name="name"/>
    <label>password:</label><input name="password"/>
    <button type="submit">提交</button>
  </form>`
}
var fn_signin = async (ctx,next) =>{
  var name = ctx.request.body.name || '',
  password= ctx.request.body.password|| '';
  console.log(`singni with name:${name},password:${password}`);
  if(name=="koa" && password =="12345"){
    ctx.response.body=`<h1>欢迎！${name}</h1>`
  }else{
    ctx.response.body=`<h1>登陆失败！请重试</h1>
                        <a href="/">重试</a>`
  }
}
module.exports ={
  'GET /':fn_index,
  'POST /signin': fn_signin
}