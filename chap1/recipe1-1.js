var str1 = String("string");
var num1 = Number(1.45);
var bool1 = Boolean(true);

if (str1 === "string") {
  console.log('equal');
}

if (num1 === 1.45) {
  console.log('equal');
}

if (bool1 === true) {
  console.log('equal');
}

var str2 = new String("string");
var num2 = new Number(1.45);
var bool2 = new Boolean(true);

if (str2 === "string") {
  console.log('equal');
} else {
  console.log('not equal');
}

if (num2 === 1.45) {
  console.log('equal');
} else {
  console.log('not equal');
}

if (bool2 === true) {
  console.log('equal');
} else { 
  console.log('not equal');
}

