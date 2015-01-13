var fs = require('fs');

fs.open('newfile.txt', 'a+',function(err,fd){
   if (err) {
      console.log(err.message);
   } else {
      var buf = new Buffer("The first string\n");
      fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {
         if (err) {
            console.log(err.message);
         } else {
            var buf2 = new Buffer("The second string\n");
            fs.write(fd, buf2, 0, buf2.length, 0,
                               function(err, written2, buffer) {
               if (err) {
                  console.log(err.message);
               } else {
                  var length = written + written2;
                  var buf3 = new Buffer(length);
                  fs.read(fd, buf3, 0, length, 0,
                            function( err, bytes, buffer) {
                     if(err) {
                        console.log(err.message);
                     } else {
                        console.log(buf3.toString());
                     }
                  });
               }
            });
         }
      });
   }
});

