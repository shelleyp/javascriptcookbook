var twitterAPI = require('node-twitter-api');
var route = require('router')();
var https = require('https');
var fs = require('fs');
var url = require('url');

var options = {
   key: fs.readFileSync('/home/examples/ssl/server.key'),
   cert: fs.readFileSync('/home/examples/ssl/server.crt')
};

https.createServer(options, route).listen(443);

var twitter = new twitterAPI({
    consumerKey: 'j5STV3JR9UlxoX5VTESdxiIcV',
    consumerSecret: 'yddhidqD6OccE2VSjEAOs1yc7ztINWvm1EQG9y7owoz0CkoaD4',
    callback: 'https://burningbird.net/auth/'
});

var token, tokensec;
var atoken, atokensec;

var menu = '<a href="/post/status/">Say hello</a><br />' +
           '<a href="/get/account/">Account Settings<br />';

route.get('/', function(req, res) {
   twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results) {
    if (error) {
        console.log('Error getting OAuth request token : ' + error);
        res.writeHead(200);
        res.end('Error getting authorization' + error);
    } else {
        token = requestToken;
        tokensec = requestTokenSecret;
        res.writeHead(302, {'Location': 'https://api.twitter.com/oauth/authenticate?oauth_token=' + requestToken});
        res.end();
    }
   });
});

route.get('/auth/', function(req,res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  twitter.getAccessToken(token, tokensec,query.oauth_verifier, 
         function(err, accessToken, accessTokenSecret,results) {
            res.writeHead(200);
            if (err) {
               res.end('problems getting authorization with Twitter' + err);
            } else { 
               atoken = accessToken;
               atokensec = accessTokenSecret;  
               res.end(menu);
            }
  });
});

route.get('/post/status/', function(req,res) {
   twitter.statuses('update', {
        "status": "Hi from Shelley's Toy Box. (Ignore--developing Node app)"
        }, atoken, atokensec, function(err, data, response) {
         res.writeHead(200);
         if (err) {
           res.end('problems posting ' + JSON.stringify(err));
         } else {
           res.end('posting status: ' + JSON.stringify(data) + '<br />' + menu);
         }
   });
});

route.get('/get/account/', function(req, res) {
   twitter.account('settings',{},atoken,atokensec,
          function(err,data,response){
          res.writeHead(200);
          if (err) {
             res.end('problems getting account ' + JSON.stringify(err));
          } else {
             res.end('<p>' + JSON.stringify(data) + '</p>' + menu);
          }
    });
});
