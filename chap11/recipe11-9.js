var spawn = require('child_process').spawn,
    imcmp = spawn('identify',['-verbose', 'osprey.jpg']);

imcmp.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
});

imcmp.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

imcmp.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});
