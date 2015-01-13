var wsServer = require('ws').Server;
var wss = new wsServer({port:8001});
wss.on('connection', (function (conn) {

   console.log('connected');
    // object being passed back and forth between
    // client and server
    var counter = {counter: 1, strng: ''};

    // send first communication to client
    conn.send(JSON.stringify(counter));

    // on response back
    conn.on('message', function(message) {
        var ct = JSON.parse(message);
        ct.counter = parseInt(ct.counter) + 1;
        if (ct.counter < 100) {
           conn.send(JSON.stringify(ct));
        }
    });
}));

