var restify = require('restify');

var server = restify.createServer({name: 'Examples'});
server.use(restify.bodyParser());

server.get('/api/get/:widget', function retrieve(req, res, next) {
   res.send('data is ' + req.params.widget);
   next();
});

server.post('/api/post/', function create(req, res, next) {
   console.log(req.params);
   res.send('created widget ' + req.params.param1);
   return next();
 });

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

