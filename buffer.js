const buf = Buffer.from('bufferdemo','ascii')
console.log(buf.toString('hex'))
console.log(buf.toString('base64'))

// 创建一个长度为10，且用0填充的Buffer 
const buf1 = Buffer.alloc(10)
console.log(buf1.toString('hex'),'buf1')

// 创建一个长度为10，且用0*1填充的Buffer
const buf2 = Buffer.alloc(10,1)
console.log(buf2.toString('hex'),'buf2')

// 创建一个未初始化的BUffer  allocUnsafe()
// 比调用Buffer.alloc()快  
// 但是返回的Buffer可能包涵旧数据 
// 因此需要使用fill()或者write()重写
const buf3 = Buffer.allocUnsafe(10)
console.log(buf3.toString('hex'),'buf3')

const buf4 = Buffer.from([1,2,3])
console.log(buf4.toString('hex'),'buf4')

const buf5 = Buffer.from('test')
console.log(buf5.toString('hex'),'buf5')

const buf6 = Buffer.from('test','latin1')
console.log(buf6.toString('hex'),'buf6')

// buf.write(string[, offset[, length]][, encoding])  buffer写入缓冲区

