var decArray = [23, 255, 122, 5, 16, 99];

var hexArray = decArray.map(function(element) {
  return element.toString(16);
});

console.log(hexArray); // ["17", "ff", "7a", "5", "10", "63"]
