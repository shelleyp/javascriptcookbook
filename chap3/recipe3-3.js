
function factorial(n) {
  console.log(n);
  return n == 1 ? 1 : n * factorial(n -1);
}

function noBlock(n, callback) {
  setTimeout(function() {
    var val = factorial(n);
    if (callback && typeof callback == 'function') {
      callback(val);
    }
  },0);
}

console.log("Top of the morning to you");

noBlock(3, function(n) {
  console.log('first call ends with ' + n);
  noBlock(n, function(m) {
    console.log("final result is " + m);
  });
});

var tst = 0;
for (i = 0; i < 10; i++) {
  tst+=i;
}

console.log("value of tst is " + tst);

noBlock(4, function(n) {
  console.log("end result is " + n);
});

console.log("not doing too much");

