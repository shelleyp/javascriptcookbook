var fs = require('fs');

var buf = "I'm going to add this text to a file";
fs.appendFile('main.txt', buf, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("appended text to file");
    }
 });
