var app = require('http').createServer(handler)
  , fs = require('fs');
var ws = require("nodejs-websocket");

app.listen(8124);

// serve static page
function handler (req, res) {
  fs.readFile(__dirname + '/drawline.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading drawline.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

// data timer
function startTimer() {
   setInterval(function() {
      var newval = Math.floor(Math.random() * 100) + 1;
      if (server.connections.length > 0) {
         console.log('sending ' + newval);
         var counter = {counter: newval};
         server.connections.forEach(function(conn, idx) {
            conn.sendText(JSON.stringify(counter), function() {
               console.log('conn sent')
            });
         });
       }
   },3000);
}


// websocket connection
var server = ws.createServer(function (conn) {
    console.log('connected');
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    });
}).listen(8001, function() {
     startTimer(); }
);

