function sumRounds() {
  var args = [].slice.call(arguments);
  
  return args.reduce(function(val1,val2) {
    return parseInt(val1,10) + parseInt(val2,10);
  });
}

var sum = sumRounds("2.3", 4, 5, "16", 18.1);

console.log(sum); // 45
