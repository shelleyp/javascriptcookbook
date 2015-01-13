var http = require('http'),
    url = require('url');
var XMLWriter = require('xml-writer');

// start server, listen for requests
var server = http.createServer().listen(8080);
server.on('request', function(req, res) {

  var xw = new XMLWriter;

  // start doc and root element
  xw.startDocument().startElement("resources");

  // resource
  xw.startElement("resource");
  xw.writeElement("title","Ecma-262 Edition 6");
  xw.writeElement("url",
  "http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts");
  xw.endElement();
  
  // resource
  xw.startElement("resource");
  xw.writeElement("title","ECMA-262 Edition 5.1");
  xw.writeElement("url",
  "http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf");
  xw.endElement();
  
   // resource
  xw.startElement("resource");
  xw.writeElement("title", "ECMA-402");
  xw.writeElement("url", 
  "http://ecma-international.org/ecma-402/1.0/ECMA-402.pdf");
  xw.endElement();

  // end resources
  xw.endElement();

  res.writeHeader(200, {"Content-Type": "application/xml", 
  "Access-Control-Allow-Origin": "*"});
  res.end(xw.toString(),"utf8");
});

