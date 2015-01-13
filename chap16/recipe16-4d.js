var phantom = require('phantom');

var pageUrl = "http://oreilly.com";

phantom.create(function (ph) {
   ph.createPage(function (page) {
      page.set('viewportSize', {width:800, height:1200}, function(){
        page.set('clipRect', {top:50,left:50,width:600,height:600}, function(){
           page.open(pageUrl, function(status) {
              if (status == 'success') {
                 setTimeout(function(){
                    page.render('screenshot.png', function(finished){
                       console.log('rendering '+pageUrl+' done');
                          ph.exit();
                    });
                 }, 15000);
               }
           });
        });
      });
    });
});

