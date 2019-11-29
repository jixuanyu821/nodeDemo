// eventEmitter类
//引入event模块
var events = require('events');
// 创建eventEmitter对象
var eventEmitter = events.EventEmitter;
var event = new eventEmitter();
event.on('some_event',function () {
  console.log('some_event事件被触发')
})
setTimeout(() => {
  event.emit('some_event')
}, 1000);

var listener11 = function (param1,param2) {
  console.log('listener1',param1,param2)
}
var listener12 = function (param1,param2) {
  console.log('listener2',param1,param2)
}
var listener13 = function (param1,param2) {
  console.log('listener3',param1,param2)
}

event.on('event1',listener11)
event.once('event1',listener13)

event.addListener('event1',listener12)
// event.emit('event2','参数11','参数22')
var countNum = event.listenerCount('event1')
console.log(countNum+' event1计数器')
event.emit('event1','参数1','参数2')

// event.emit('error')//undefined
var countNum = event.listenerCount('event1')
console.log(countNum+' event1计数器 验证once')
event.emit('event1','参数1','参数2')

event.removeListener('event1', listener12);
console.log("listener1 不再受监听。");

var countNum = event.listenerCount('event1')
console.log(countNum+' event1计数器 验证removeListner')
event.emit('event1','参数1','参数2')

event.removeAllListeners('event1')
event.emit('event1','参数1','参数2')
console.log(countNum+' event1计数器 验证removeListner')
event.emit('event1','参数1','参数2')
// setInterval(() => {
//   event.emit('event1','参数1','参数2')
//   event.emit('event2','参数11','参数22')
// }, 1000);
