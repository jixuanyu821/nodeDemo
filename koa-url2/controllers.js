/*
 * @Description: 
 * @Author: jixuanyu
 * @Date: 2020-04-21 17:03:57
 * @LastEditTime: 2020-04-21 17:19:26
 * @LastEditors: jixuanyu
 */
const fs = require('fs');
function addMapping(router,mapping){
  for(var url in mapping){
    if(url.startsWith('GET')){
      var path = url.substring(4)
      router.get(path, mapping[url])
      console.log(`register URL mapping: GET ${path}`)
    }else if (url.startsWith('POST')){
      var path = url.substring(5);
      router.post(path,mapping[url])
      console.log(`register URL mapping: POST ${path}`);
    } else {
      // 无效的URL:
      console.log(`invalid URL: ${url}`);
    }
  }
}
function addControllers(router) {
  let files = fs.readdirSync(__dirname + '/controllers');
  var js_files = files.filter((f)=>{
    return f.endsWith('.js'); // 过滤js文件
  });
  for(var f of js_files){
    console.log(`js文件：${f}`);
    // 导入js文件
    let mapping = require(__dirname + '/controllers/' +f);
    addMapping(router,mapping)
  }
}

module.exports = function (dir) {
  let controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
  Route = require('koa-router')();
  addControllers(Route, controllers_dir);
  return Route.routes();
};