/*
 * @Description: koa(web框架)
 * @Author: jixuanyu
 * @Date: 2020-04-13 17:44:56
 * @LastEditTime: 2020-04-21 17:13:20
 * @LastEditors: jixuanyu
 */
const Koa = require('koa'); // 引入组件
const bodyParser = require('koa-bodyparser');
const app = new Koa(); // 创建实例
const controller = require('./controllers');
app.use(bodyParser());
app.use(async (ctx, next) =>{
  console.log(`${ctx.request.method} ${ctx.request.url}`)
  await next();
})

app.use(controller());
app.listen(3000); // 创建
console.log('app started at port 3000...');