var tesseract = require('node-tesseract');
var fs = require('fs');

var myArgs = process.argv.slice(2);

tesseract.process(__dirname + '/' + myArgs[0],function(err, text) {
    if(err) {
       console.log(err);
    } else {
        fs.writeFile(myArgs[1], text, function(err) {
           if(err) {
             console.log(err);
           } else {
             console.log('Converted text stored in ' + myArgs[1]);
           }
        });
    }
});
