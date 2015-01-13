var restify = require('restify');
var widget = require('save')('widget');

var server = restify.createServer({name: 'Examples'});
server.use(restify.fullResponse());
server.use(restify.bodyParser());

// GET
server.get('/api/:widget', function retrieve(req, res, next) {
   widget.findOne({_id: req.params.widget}, function (err, obj) {
      if (err) {
         return next (
            new restify.InvalidArgumentError(JSON.stringify(error.errors)));
      }
      if (obj) {
         res.send(200,obj);
      } else {
         res.send(404);
      }
      return next();
    });
});

// POST
server.post('/api/create', function create(req, res, next) {
   widget.create(req.params, function (err,widget) {
     console.log(widget);
     res.send(201, widget._id);
   });
   return next();
 });

// PUT
server.put('/api/:id', function(req, res, next) {
   if (req.params.cost === undefined) {
      return next(new 
          restify.InvalidArgumentError('cost must be supplied'));
   }
   widget.update({_id: req.params.id, name: req.params.name, 
                  cost: req.params.cost},
     function (error, obj) {
        if (error) {
          return next(new 
            restify.InvalidArgumentError(JSON.stringify(error.errors)));
        }
        res.send(200);
        return next();
    });
});

server.del('/api/:id', function (req, res, next) {
   widget.delete(req.params.id, function(err) {
      if (err) {
        console.log(err);
         return next (
           new restify.ResourceNotFoundError(JSON.stringify(err.errors)));
      }
    });
    res.send(200);
    return next();
});

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

