/*
 * @Description: koa(web框架)
 * @Author: jixuanyu
 * @Date: 2020-04-13 17:44:56
 * @LastEditTime: 2020-04-21 16:01:52
 * @LastEditors: jixuanyu
 */
const Koa = require('koa'); // 引入组件
const Route = require('koa-router')(); // 注意是函数
const bodyParser = require('koa-bodyparser');
const app = new Koa(); // 创建实例
app.use(bodyParser());
app.use(async (ctx, next) =>{
  console.log(`${ctx.request.method} ${ctx.request.url}`)
  await next();
})
Route.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
                        <form action="/signin" method="post">
                          <label>name:</label><input name="name"/>
                          <label>password:</label><input name="password"/>
                          <button type="submit">提交</button>
                        </form>`
});
Route.get('/hello/:name',async (ctx, next)=>{
  var name = ctx.params.name;
  ctx.response.body = `<h1>methods params:${name}</h1>`;
})

Route.post('/signin',async (ctx, next) =>{
  var name = ctx.request.body.name || '',
  password= ctx.request.body.password|| '';
  console.log(`singni with name:${name},password:${password}`);
  if(name=="koa" && password =="12345"){
    ctx.response.body=`<h1>欢迎！${name}</h1>`
  }else{
    ctx.response.body=`<h1>登陆失败！请重试</h1>
                        <a href="/">重试</a>`
  }
})
app.use(Route.routes());
app.listen(3000); // 创建
console.log('app started at port 3000...');