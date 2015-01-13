var jsonobj = '{"test" : "value1", "test2" : 3.44, "test3" : 0}';
var obj = JSON.parse(jsonobj, function (key, value) {
   if (typeof value == 'number') {
     if (value == 0) {
       value = false;
     } else if (value == 1) {
       value = true;
     }
   }
   return value;
   });

 console.log(obj.test3); // prints false
