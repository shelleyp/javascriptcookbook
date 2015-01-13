var request = require('request');
request('http://oreilly.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
})
