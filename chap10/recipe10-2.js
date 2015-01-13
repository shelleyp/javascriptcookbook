var col1 = new Set();
col1.add("apple");
col1.add("oranges");
console.log(col1.size); // 2

col1.add("banana");
col1.add("banana"); // ignored
col1.add("banana"); // yup, still ignored

console.log(col1.size); // 3

col1.delete("banana");

console.log(col1.size); // 2

console.log(col1.has("banana")); // false
console.log(col1.has("apple")); //true

col1.forEach(function(value) {
  console.log(value);
});

var arr = [...col1];
console.log(arr[1]); // oranges 

var col2 = new Set(['one','two','three']);
console.log(col2.size); // 3

var arr2 = ['test','again'];
var col3 = new Set(arr2);
console.log(col3.size); // 2

col1.clear(); 
console.log(col1.size); // 0 

var mySet2 = new Set();
mySet2.add('test');
mySet2.add(5);
mySet2.add(true);

mySet.add(mySet2);

mySet.forEach(function(value) {
  console.log(value.toString());
});


