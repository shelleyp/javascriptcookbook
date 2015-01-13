var readline = require('readline');
var sum = 0;

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Enter numbers, one to a line. Enter 'exit' to quit.");

rl.setPrompt('>> ');
rl.prompt();

rl.on('line', function(input) {
   input = input.trim();
   if (input == 'exit') {
      rl.close();
      return;
   } else {
    sum+= Number(input);
   }
   rl.prompt();
});

// user typed in 'exit'
rl.on('close', function() {
   console.log("Total is " + sum);
   process.exit(0);
});

