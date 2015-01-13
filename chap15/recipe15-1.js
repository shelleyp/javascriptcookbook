var http = require('http');

var server = http.createServer(function(req,res){
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200);
  res.end("Hello cross-domain");

});

server.listen(8080);

