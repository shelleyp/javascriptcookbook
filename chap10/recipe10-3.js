var myMap = new Map();

myMap.set("value1", "this is value");
myMap.set(3, "another value");

myMap.set(NaN, "isn't this interesting");

myMap.set(window, "really now");

console.log(myMap.get("value1")); // this is a value
console.log(myMap.get(NaN)); // isn't this interesting
console.log(myMap.get(3)); // another value
console.log(myMap.get(window)); // really now

for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}

// iterating through keys
for (var key of myMap.keys()) {
  console.log(key);
}

// iterating through values
for (var value of myMap.values()) {
  console.log(value);
}

myMap.forEach(function(value) {
  console.log(value);
});

var mapIter = myMap.keys();

console.log(mapIter.next().value);
console.log(mapIter.next().value);
console.log(mapIter.next().value);

var b = {first: 'apple', second: 'pear'};
var c = {first: '5', second: '1'};
var d = [1,2,3,4];
var e = b;

var myMap = new Map();

myMap.set(b, 'first');
myMap.set(c, 'second');
myMap.set(d, 'array');
myMap.set(window,'global');

console.log(myMap.get(window)); // 'global'
console.log(myMap.get([1,2,3,4])); // undefined
console.log(myMap.get(d)); // 'array'
console.log(myMap.get(e)); // 'first'

