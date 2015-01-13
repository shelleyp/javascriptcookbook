// load http module
var http = require('http');

// create http server
http.createServer(function (req, res) {

  // get query string and parameters
  var query = require('url').parse(req.url,true).query;

  // content header
  res.writeHead(200, {'content-type': 'text/plain'});

  // write message and signal communication is complete
  var name = query.first ? query.first : "World";

  res.end("Hello, " + name + "!\n");
}).listen(8124);

console.log('Server running on 8124/');

