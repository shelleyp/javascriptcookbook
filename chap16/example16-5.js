var formidable = require('formidable');
var http = require('http');
var fs = require('fs');
var im = require('imagemagick');

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

    // parse a file upload
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + '/photos';
    form.keepExtensions = true;

    form.parse(req, function(err, fields, files) {
      var filepath = __dirname + '/photos/' + files.upload.name;
      fs.rename(files.upload.path, filepath, function(err) {
         if (err) {
           res.end(err);
           return;
         }

         // crop the image
         im.convert([filepath, '-crop', '100x100+50+50',
             __dirname + '/cropped/' + 'cropped.' + files.upload.name],
          function(err, metadata) {
            console.log(err);
            res.end(err);
            return;
         });

         res.writeHead(200, {'content-type': 'text/html'});
         res.write('<p>Uploaded and cropped:</p>');
         res.end('<img src="/cropped/cropped.' + files.upload.name + '" />');
       });
    });

  // display cropped image
  } else if (req.url.indexOf('/cropped') >= 0) {
     var path = require('url').parse(req.url).path;
     fs.readFile(__dirname + path,
       function (err, data) {
          if (err) {
             res.writeHead(500);
             return res.end(req.url);
          }
          res.writeHead(200);
          res.end(data);
       });
  } else {
     // show a file upload form
     res.writeHead(200, {'content-type': 'text/html'});
     res.end(
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        'Image: <input type="file" name="upload" multiple="multiple"><br><br>'+
        '<input type="submit" value="Upload">'+
        '</form>'
     );
  }
}).listen(8080);

