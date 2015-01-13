var phantom = require('phantom');

var pageUrl = "http://oreilly.com";

phantom.create(function (ph) {
   ph.createPage(function (page) {
      page.open(pageUrl, function(status) {
         console.log(status);
         setTimeout(function(){
           page.render('screenshot.png', function(finished){
             console.log('rendering '+pageUrl+' done');
             ph.exit();
           });
         }, 15000);
      });
   });
});
