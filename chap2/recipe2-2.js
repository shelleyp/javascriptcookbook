var fruitarray = [];
fruitarray[0] = ['strawberry','orange'];
fruitarray[1] = ['lime','peach','banana'];
fruitarray[2] = ['tangerine','apricot'];
fruitarray[3] = ['raspberry','kiwi'];

// flatten array
var newArray = fruitarray.concat.apply([],fruitarray);
console.log(newArray[5]); // tangerine
