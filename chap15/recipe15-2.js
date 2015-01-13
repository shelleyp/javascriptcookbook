var http = require('http');

var server = http.createServer(function(req,res){
  // Set CORS headers

  res.setHeader('Content-type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  if (req.method.toUpperCase() == "OPTIONS") {
    res.writeHead(204);
    return(res.end());
  }
  var data = '';
  req.on('data', function(chunk) {
    data+=chunk;
  });

  req.on('end', function () {
    console.log('PUT: ' + data);
    res.writeHead(200);
    res.end('PUT ' + data);
  });
});

server.listen(8080);

