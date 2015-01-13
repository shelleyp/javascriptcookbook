var spawn = require('child_process').spawn;

// get photo
var photo = process.argv[2];

// conversion array
var opts = [
photo,
"-bordercolor", "snow",
"-border", "20",
"-background","grey60",
"-background", "none",
"-rotate", "6",
"-background", "black",
"(", "+clone", "-shadow", "60x4+4+4", ")",
"+swap",
"-background", "none",
"-flatten",
photo + ".png"];

var im = spawn('convert', opts);

