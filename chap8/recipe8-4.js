function convertBoolToNums(key, value) {
  if (typeof value == 'boolean') {
    if (value)
      value = 1;
    else
      value = 0;
  }
  return value;
};


var obj = {test : "value1", 
           test2 : 3.44, 
           test3 : false};
           
var jsonstr = JSON.stringify(obj, convertBoolToNums, 3);

console.log(jsonstr); // '{ "test" : "value1", "test2" : 3.44, "test3" : 0}' 
