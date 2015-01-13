define(['one'], function(one) {
        return {
           hi: function(val) {
                  one.hi();
                  console.log('hello ' + val + ' from two');
               }
        }
});     
