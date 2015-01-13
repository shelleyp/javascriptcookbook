var restify = require('restify');

var client = restify.createStringClient({
   url: 'http://examples.burningbird.net:8080'
});

client.post('/api/post', {param1: 'value'}, function(err, req, res, data) {
   console.log(data);
   process.exit(1);
});
