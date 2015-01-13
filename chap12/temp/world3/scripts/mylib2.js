define(["./one","/two"],function(one,two) {
    return {
       var1: "some value",
       sayHello: function() {
         console.log('hello from mylib');
         one.hi();
         two.hi('world');
       }
    }
});
         
