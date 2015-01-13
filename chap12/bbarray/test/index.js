var assert = require('assert');
var bbarray = require('../bbarray.js');

describe('bbarray',function() {
   describe('#concatArray()', function() {
     it('should return -1 when not using array', function() {
        assert.equal(-1, bbarray.concatArray(9,'str'));
     });
     it('should return -1 when not using string', function() {
        assert.equal(-1, bbarray.concatArray(9,['test','two']));
     });
     it('should return an array with proper args', function() {
        assert.deepEqual(['is test','is three'], 
                      bbarray.concatArray('is',['test','three']));
     });
   });
   describe('#splitArray()', function() {
     it('should return -1 when not using array', function() {
       assert.equal(-1, bbarray.splitArray(9,'str'));
     });
     it('should return -1 when not using string', function() {
       assert.equal(-1, bbarray.splitArray(9,['test','two']));
     });
     it('should return an array with proper args', function() {
       assert.deepEqual(['test','three'], 
                        bbarray.splitArray('is',['is test','is three']));
     });
   });
}); 

