var data = {};

var group = 'history';

Object.defineProperty(data, "category", {
  get: function () { return group; },
  set: function (value) { group = value; },
  enumerable: true,
  configurable: true
});

console.log(data.category); // history

group = 'math';
console.log(data.category); // math

data.category = 'spanish';
console.log(data.category); // spanish
console.log(group); // spanish

