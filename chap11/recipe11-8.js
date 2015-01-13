var fs = require('fs');
var async = require('async');

async.waterfall([
   function openFile(callback) {
      fs.open('newfile.txt', 'a+',function (err, fd){
        callback(err,fd);
      });
   },
   function writeBuffer(fd, callback) {
      var buf = new Buffer("The first string\n");
      fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {
         callback(err, fd, written);
      });
   },
   function writeBuffer2(fd, written, callback) {
      var buf = new Buffer("The second string\n");
      fs.write(fd, buf, 0, buf.length, 0, function(err, written2, buffer){
         callback(err, fd, written, written2);
      });
   },
   function readFile(fd, written, written2, callback) {
      var length = written + written2;
      var buf3 = new Buffer(length);
      fs.read(fd, buf3, 0, length, 0, function(err, bytes, buffer) {
          callback (err, buf3.toString());
      });
   }
], function (err, result) {
   if (err) {
     console.log(err);
   } else {
     console.log(result);
   }
});

