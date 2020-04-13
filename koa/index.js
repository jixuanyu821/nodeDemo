/*
 * @Description: koa(web框架)
 * @Author: jixuanyu
 * @Date: 2020-04-13 17:44:56
 * @LastEditTime: 2020-04-13 18:13:32
 * @LastEditors: jixuanyu
 */
const Koa = require('koa'); // 引入组件
const app = new Koa(); // 创建实例
app.use(async (ctx,next)=>{
  await next();
  ctx.response.type= 'text/html';
  ctx.response.body = `<h1>Koa demo</h1>`
})
app.listen(3000); // 创建