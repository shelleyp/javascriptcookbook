var spawn = require('child_process').spawn,
    imcmp = spawn('identify',['-verbose', 'osprey.jpg']),
    grep = spawn('grep', ['Resolution']);

imcmp.stdout.on('data', function (data) {
   grep.stdin.write(data);
});

imcmp.stderr.on('data', function (data) {
  console.log('stderr: ' + typeof data);
});

grep.stdout.on('data', function (data) {
  console.log('grep data: ' + data);
});

grep.stderr.on('data', function (data) {
  console.log('grep error: ' + data);
});
imcmp.on('close', function (code) {
  console.log('child process close with code ' + code);
  grep.stdin.end();
});

grep.on('close', function(code) {
  console.log('grep closes with code ' + code);
});

