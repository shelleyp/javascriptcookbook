var request = require('request');
var fs = require('fs');

request('http://burningbird.net/flame.png')
  .pipe(fs.createWriteStream('flame.png'));
