var http = require('http');
var router = require('router');
var route = router();
var fs = require('fs');

route.get('/', function(req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
});

route.get('/oauth.html', function(req,res) {
  console.log('authorizing');
  fs.readFile(__dirname+ '/oauth.html',
  function(err,data) {
     if (err) {
	res.writeHead(500);
	return res.end('Error loading oauth.html');
     }
     res.writeHead(200);
     res.end(data);
  });
});

http.createServer(route).listen(8080); // start the server on port 8080
