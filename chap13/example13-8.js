var http = require("http");
var cache = require("memory-cache");
var Client = require("node-rest-client").Client;
var client = new Client();

var server = http.createServer();
server.on('request', request);
server.listen(8080);

function request(request, response) {
    var address;

    // get address from client
    request.on('data', function(data)
    {
        var addrObj = JSON.parse(data);
        address = require("querystring").escape(addrObj.address);
    });

    // get geo loc
    request.on('end', function()
    {
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");

        // check if cached
        // if so, return cached results
        var loc = cache.get(address);
        if (loc) {
           console.log(loc);
           response.end(loc);
           return;
        }
        // not cached, look up loc using API
        var api = 
        "https://maps.googleapis.com/maps/api/geocode/json?key=yourkey" + 
                   "&address=" + address +
                   "&region=us";
        console.log(api);

        client.get(api, function(data, res) {
           var resultObj = JSON.parse(data);
           location = resultObj.results[0].geometry.location;
           var loc = JSON.stringify(location);
           cache.put(address,loc);
           response.end(JSON.stringify(location));
        });
    });
}

