var event = require('events'); //引入event模块
var eventEmitter = new event.EventEmitter(); //创建对象
//创建事件处理程序
var connectHandler = function () {
  console.log('连接成功')
  eventEmitter.emit('data_received');
}

// 绑定connection 事件处理程序
eventEmitter.on('connection', connectHandler);

//使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
  console.log('数据接收成功');
})

//触发 connection 事件
eventEmitter.emit('connection');
console.log('event done')