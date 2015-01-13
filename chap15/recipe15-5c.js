var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs')

app.listen(8124);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
  var counter = {'counter': 1, 'strng': ''};
  socket.emit('counter', counter);
  socket.on('counter', function (data) {
        data.counter = parseInt(data.counter) + 1;
        if (data.counter < 100) {
           socket.emit('counter', data);
        }
  });
});

