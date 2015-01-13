var data = {};

Object.defineProperty(data, 'type', {
  value: 'primary',
  enumerable: true
});

console.log(data.type); // primary
data.type = 'secondary'; 
console.log(data.type); // nope, still primary

Object.defineProperty(data, 'id', {
  value: 1,
  writable: true
});

console.log(data.id); // 1
data.id=300; 
console.log(data.id); // 300

for (prop in data) {
  console.log(prop); // only type displays
}

