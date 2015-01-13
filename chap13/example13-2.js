var restify = require('restify');
var assert = require('assert');

var client = restify.createStringClient({
   url: 'http://examples.burningbird.net:8080'
});

function handleError(err) {
  console.log(err);
  process.exit(1);
}

// POST
client.post('/api/create', {name: 'super gidget', cost: '12.35'}, function(err, req, res, data) {
  if (err)
    return handleError(err);
  if (res.statusCode == '201') {
    console.log('POST id ' + data);

    // GET
    var id = data;
    client.get('/api/' + id, function (err, req, res, data) {
      if (err) 
        return handleError(err);
      if (res.statusCode == '200') {
        console.log(data);
            
        // PUT
        client.put('/api/' + id, {name: 'super gidget', cost: '15,76'},
           function(err, req, res, data) {
             if (err) 
               return handleError(err);
             console.log('PUT ' + res.statusCode);

             // DEL
             client.del('/api/' + id, function(err, req, res) {
                if (err)
                  return handleError(err);
                console.log('DEL ' + res.statusCode);
                process.exit(1);
             });
        });
      }
    });
  }
});

