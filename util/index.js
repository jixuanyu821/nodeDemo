const util = require('util');

// async function fn(){
//   return 'hello world'
// }

//  callbackify 可以将异步函数转为错误优先的同步函数
// const callbackFunction = util.callbackify(fn)
// callbackFunction((err,ret)=>{
//   if(err) throw (err)
//   console.log(ret)
// })

function fn(){
  return Promise.reject(null)
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err,ret)=>{
  console.log(err,err.hasOwnProperty('reason'))
})