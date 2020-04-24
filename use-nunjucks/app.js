/*
 * @Description: 入口文件
 * @Author: jixuanyu
 * @Date: 2020-04-24 16:21:40
 * @LastEditTime: 2020-04-24 16:39:20
 * @LastEditors: jixuanyu
 */
const nunjucks = require('nunjucks')
function createEnv(path, opts){
  var autoescape = opts.autoescape === undefined? true :opts.autoescape,
  noCache = opts.noCache || false,
  watch = opts.watch || false,
  throwOnUndefined  = opts.throwOnUndefined || false,
  env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('views',{
      noCache: noCache,
      watch: watch
    }), {
      autoescape: autoescape,
      throwOnUndefined:throwOnUndefined
    });
  if (opts.filters){
    for(var f in opts.filters){
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env
}
var env = createEnv('views',{
  watch: true,
  filters:{
    hex: function(n){
      return '0x' + n.toString(16)
    }
  }
})
var s = env.render('index.html', {name:'小明'})
console.log(s)