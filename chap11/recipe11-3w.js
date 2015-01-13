var fs = require('fs');

var buf = "I'm going to write this text to a file\n";
fs.writeFile('main.txt', buf, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("wrote text to file");
  }
});
