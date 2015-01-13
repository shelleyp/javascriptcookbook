var page = require('webpage').create();
page.open('http://oreilly.com', function() {
  page.viewportSize = {
     width: 800,
     height: 1280
  }
  page.clipRect = {
     top: 50,
     left: 50,
     width: 600,
     height: 600
  }

  page.render('oreilly2.png');
  phantom.exit();
});
