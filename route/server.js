const http = require('http')
const url = require('url')

function start(route){
  function onRequest(request,response){
    var pathName = url.parse(request.url).pathname;
    console.log("Requset for " + pathName + " recevied");

    route(pathName);

    response.writeHead(200,{"Content-type":"text/plain"});
    response.write("server test");
    response.end();
  }
  
  http.createServer(onRequest).listen(8000);
  console.log("Server has worked")
}

exports.start = start;