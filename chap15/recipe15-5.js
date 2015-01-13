var app = require('http').createServer(handler)
  , fs = require('fs');

var ws = require("nodejs-websocket");

app.listen(8124);

function handler (req, res) {
  console.log("if HTTP is required, too");
  fs.readFile(__dirname + '/index2.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index2.html');
    }
    counter = 1;
    res.writeHead(200);
    res.end(data);
  });
}

var server = ws.createServer(function (conn) {

    // object being passed back and forth between
    // client and server
    var counter = {counter: 1, strng: ''};

    // send first communication to client
    conn.sendText(JSON.stringify(counter));

    // on response back
    conn.on('text', function(message) {
        var ct = JSON.parse(message);
        ct.counter = parseInt(ct.counter) + 1;
        if (ct.counter < 100) {
           conn.sendText(JSON.stringify(ct));
        }
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    });
}).listen(8001);

