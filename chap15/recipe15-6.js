var formidable = require('formidable');
var http = require('http');
var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();

http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

    // parse a file upload
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + '/files';
    form.keepExtensions = false;

    form.parse(req, function(err, fields, files) {
      var wstream = fs.createWriteStream(__dirname + '/files/' + 
         files.upload.name + '.gz');
      var rstream = fs.createReadStream(files.upload.path);
      rstream
        .pipe(gzip)
        .pipe(wstream)
        .on('finish', function() {
            // delete original uploaded file
            fs.unlink(files.upload.path, function(err) {
               if (err) {
                 console.log(err);
               } else {
                  res.writeHead(200, {'content-type': 'text/plain'});
                  res.write('Uploaded and compressed:\n\n');
                  res.end(files.upload.name + '.gz');
               }
             });
        });
    });

    return;
  }

  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="upload" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
  );
}).listen(8080);

