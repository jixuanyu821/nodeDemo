var fs = require('fs')
fs.readFile('index.txt', (res, data) => {
  if (res) 
    return console.log(res)
  
  console.log(data.toString())
})
console.log('done')