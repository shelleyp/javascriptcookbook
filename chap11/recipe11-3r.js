var fs = require('fs');

fs.readFile('main.txt', {encoding: 'utf8'},function(err,data) {
   if (err) {
      console.log("Error: Could not open file for reading\n");
   } else {
      console.log(data);
   }
});
