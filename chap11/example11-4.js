var request = require('request');
var cheerio = require('cheerio');

request('http://burningbird.net', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('h2 a').each(function(i,element) {
        console.log(element.children[0].data);
    });
  }
});

