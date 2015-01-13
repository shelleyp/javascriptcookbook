var animals = new Array("dog","cat","seal","walrus","lion", "cat");

// remove the element from array
animals.splice(animals.indexOf("walrus"),1); // dog,cat,seal,lion,cat

// splice in new element
animals.splice(animals.lastIndexOf("cat"),1,"monkey"); // dog,cat,seal,lion,monkey

console.log(animals.toString());
