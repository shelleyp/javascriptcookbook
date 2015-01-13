var two = (function (){
   var two = {};

   two.hi =  function(val) {
      console.log('hello ' + val + ' from two');
   }

   if ( typeof define === "function" && define.amd ) {
      define( "two", [], function() {
         return two;
      });
   }

   return two;
}());
