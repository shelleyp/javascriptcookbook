'use strict';

let fs = require('fs');

fs.readFile('main.txt', {encoding: 'utf8', flag: 'r+'},function(err,data) {
   if (err) {
      console.log(err.message);
   } else {
      console.log(data);
   }
});
