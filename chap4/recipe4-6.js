'use strict';

var test = {
  value1 : 'one',
  value2 : function() {
    return this.value1;
  }
}

try {
  // freeze the object
  Object.freeze(test);

  // the following throws an error in Strict Mode
  test.value2 = 'two';

  // so does the following
  test.newProperty = 'value';

  var val = 'test';
  
  // and the following
  Object.defineProperty(test, 'category', {
    get: function () { return test; },
    set: function (value) { test = value; },
    enumerable: true,
    configurable: true
  });
} catch(e) {
  console.log(e);
}

