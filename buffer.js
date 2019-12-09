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
const buf7 = Buffer.alloc(2);
var len = buf7.write('www.baidu.com');
console.log('写入字节：'+ len+','+buf7.toString('utf8'));

const buf8 = Buffer.alloc(26);
for(var i = 0;i<26;i++){
  buf8[i] = i+97
}
/**
 * @description: Buffer.toString 读取缓冲区数据
 * @param {encoding }  编码方式，默认utf-8
 * @param {start} 开始位置
 * @param {end} 结束为止
 * @return: 读取的数据
 */
console.log(buf8.toString('ascii'))
console.log(buf8.toString('ascii',0,5))
console.log(buf8.toString('utf8',0,8))
console.log(buf8.toString(undefined,0,5))

const buf9 = Buffer.from([1,2,3,4]);
const json = JSON.stringify(buf9)
console.log(buf9)

