function propChecker(target) {
    
   return Proxy(target, {
      set: function(target, property, value) {
         if (property == 'price') {
            if (typeof value != 'number') {
               throw new TypeError("price is not a number");
            } else if (value <= 0) {
                throw new RangeError("price must be greater than zero");
            }
         } else if (property != 'name') {
            throw new ReferenceError("property '" + property + "' not valid");
         }
         target[property] = value; 
       }
   });
}

function Item() {

   return propChecker(this);
}

try {

   var keyboard = new Item();

   keyboard.name = "apple"; // OK
  
   keyboard.type = "red delicious"; // throws ReferenceError

   keyboard.price = "three dollars"; // throws TypeError
  
   keyboard.price = -1.00; // throws RangeError
  
} catch(err) {
   console.log(err.message);
}

var handler = {
get: function(arry, indx){
if (arry[indx] === 0) {
return false;
} else {
return true;
}
}
};
var arr = [1,0,6,1,1,0];
var a = new Proxy(arr, handler);
console.log(a[2]); // true
console.log(a[0]); // true
console.log(a[1]); // false
