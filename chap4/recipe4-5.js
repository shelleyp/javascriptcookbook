'use strict';

var Test = {
  value1 : "one",
  value2 : function() {
    return this.value1;
  }
};

try {
  Object.preventExtensions(Test);

  // the following fails, and throws a TypeError in Strict mode
  Test.value3 = "test";

} catch(e) {
   console.log(e);
}

