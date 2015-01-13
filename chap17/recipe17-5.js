var mysql = require('mysql');
var squel = require('squel');

var connection = mysql.createConnection({
   host: 'localhost',
   user: 'username',
   password: 'password',
   database: 'dbname'
});

connection.connect();
var s = squel.select()
        .field('bTitle')
        .from('sc_tags')
        .from('sc_bookmarks')
        .where("sc_tags.tag = 'xhtml'")
        .where("sc_bookmarks.bId = sc_tags.bId");
        
console.log(s.toString());

connection.query(s.toString(), function(err, rows, fields) {
   if (err) throw err;

   rows.forEach(function(elem, indx, arr) {
     console.log(elem.bTitle);
   });

   connection.end();
});

