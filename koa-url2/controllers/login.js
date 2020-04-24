/*
 * @Description: 
 * @Author: jixuanyu
 * @Date: 2020-04-21 15:28:43
 * @LastEditTime: 2020-04-21 16:35:28
 * @LastEditors: jixuanyu
 */
var fn_hello = async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}</h1>`;
}
module.exports = {
  'GET /hello/:name':fn_hello
}