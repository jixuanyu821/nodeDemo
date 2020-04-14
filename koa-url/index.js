/*
 * @Description: koa(web框架)
 * @Author: jixuanyu
 * @Date: 2020-04-13 17:44:56
 * @LastEditTime: 2020-04-14 15:11:10
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
  ctx.response.body = '<h1>Index</h1>';
});
Route.get('/hello/:name',async (ctx, next)=>{
  var name = ctx.params.name;
  ctx.response.body = `<h1>methods params:${name}</h1>`;
})
app.use(Route.routes());
app.listen(3000); // 创建
console.log('app started at port 3000...');