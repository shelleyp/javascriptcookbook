var page = require('webpage').create();
page.open('http://burningbird.net/', function() {
  page.render('bb.png');
  phantom.exit();
});
