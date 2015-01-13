var net = require("net"),
    repl = require("repl");

var options = {
   prompt: '-- ',
   useColors: true,
   ignoreUndefined: true,
};

repl.start(options);
