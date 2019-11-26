// eventEmitter类
//引入event模块
var events = require('events');
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();
var event = new EventEmitter();
event.on('some_event',function () {
  console.log('some_event事件被触发')
})
