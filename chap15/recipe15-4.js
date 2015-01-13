var http = require('http');
var Cookies = require('cookies');

var server = http.createServer(function(req,res){
  // Set CORS headers
  res.setHeader('Content-type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', 'http://examples.burningbird.net');
  res.setHeader('Access-Control-Allow-Credentials', true);

  var cookies = new Cookies (req, res);
  cookies.set("apple","red");

  res.writeHead(200);
  res.end("Hello cross-domain");
 
});

server.listen(8080);

