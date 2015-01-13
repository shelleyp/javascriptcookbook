var OAuth2 = require('oauth').OAuth2;
var https = require('https');

var atoken;

// consumer key and secret passed in from client
exports.getAuthorization = function (consumerKey, consumerSecret, callback) {
   var oauth2 = new OAuth2(
      consumerKey,
      consumerSecret,
      'https://api.twitter.com/', 
      null, 
      'oauth2/token', 
      null);

   // signaling a client credentials authorization request
   oauth2.getOAuthAccessToken('', {
      'grant_type': 'client_credentials'}, 
       function(err, atoken) {
          callback(err,atoken);
      }
    ); 
};
   
// can be any Twitter App-only authorization API endpoint 
exports.getTwitterData = function (servicePath, atoken, callback) {           
    var options = {
        hostname: 'api.twitter.com',
        path: servicePath,
        headers: {
            Authorization: 'Bearer ' + atoken
        }
    };

    https.get(options, function (result) {
        var buffer = '';
        result.setEncoding('utf8');
        result.on('data', function (data) {
            buffer += data;
        });
        result.on('end', function () {
            callback(buffer);
            });
    });
};
