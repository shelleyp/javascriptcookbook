var twitreq = require('./twitreq');
var http = require('http');

var consumerKey = 'yourkey';
var consumerSecret = 'yoursecret';

// getting access token from Twitter
twitreq.getAuthorization(consumerKey, 
                         consumerSecret, function(err, atoken) {

   if (err) {
      console.log(err);
      return;
   }       

   // if authorized, start up HTTP server
   var server = http.createServer(function(req, res) {

      // extract out search query
      var query = require('url').parse(req.url,true).query;
      var search = require('querystring').escape(query.q);

      // forming search path
      var servicePath = '/1.1/search/tweets.json?q=' + search + 
                        '&result_type=recent&lang=en';

      // make Twitter request, get results, and return to client
      twitreq.getTwitterData(servicePath, atoken, function(results) {
         res.writeHeader(200, {"Content-Type": "application/json", 
                             "Access-Control-Allow-Origin": "*"});
         res.end(results);
     });
  });

  server.listen(8080);
});

 
