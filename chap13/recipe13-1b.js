var Client = require('node-rest-client').Client;
var client = new Client();

var flickrapi = "https://api.flickr.com/services/rest/?method=flickr.photos.search&text=bird&user_id=92659632@N05&format=json&api_key=yourapikey&nojsoncallback=1";

client.get(flickrapi, function(data, response) {
   var photos = data.photos.photo;
   photos.forEach(function(elem) {
     console.log(elem.title);
   });
});
