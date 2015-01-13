var strVariable = null;
// succeeds if string with length greater than zero
if ((typeof strVariable == "string") && (strVariable.length > 0)) {
   console.log('string');
} else {
   console.log('not a string');
}

var strVariable = new String('test');

// good, nonempty string primitive
if ((strVariable != null && strVariable.length > 0) &&
     typeof strVariable.valueOf() == 'string') 
  console.log('good');
else
  console.log('bad');

var unk = ['a','b']; 

// bad, array
if (((typeof unk != 'undefined' && unk) && unk.length > 0) &&
     typeof unk.valueOf() == 'string') 
  console.log('good');
else 
  console.log('bad');


// bad, null
var a = null;
if (((typeof a != 'undefined' && a) && a.length > 0) &&
     typeof a.valueOf() == 'string')
  console.log('good');
else
  console.log('bad');

