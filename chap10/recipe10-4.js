var uniqueId = Symbol();
var newObj = {};

newObj[uniqueId] = 'No two alike';
console.log(newObj[uniqueId]); 

var uniqueId2 = Symbol('one');
var uniqueId3 = Symbol('one'); 

if (uniqueId2 == uniqueId3) {
  console.log('same');
} else {
  console.log('different');
}

var green = Symbol();
var red = Symbol();

function switchLight(light) {
   if (light === green) {
      console.log("Turning light red");
      light = red;
   } else {
      console.log("Turning light green");
      light = green;
   }
   return light;
}

var light = green;

light = switchLight(light);
light = switchLight(light);
