var jscbSingleton = (function() {
  
  var instance;
  
  function init() {
    var replacementStr = "**";
    
    return {

      // return element
      getElem : function (identifier) {
        return document.getElementById(identifier);
      },

      replaceSlashes : function(str) {
        return str.replace(/\\/g, replacementStr);
      },

      replaceAngleBrackets: function(str) {
        return str.replace(/</g,replacementStr).replace(/>/g,replacementStr);
      }
    };
  }
    
  return {
 
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
 
      if ( !instance ) {
        instance = init();
      }
 
      return instance;
    }
 
  };
})();

var jscb = jscbSingleton.getInstance();
var jscb2 = jscbSingleton.getInstance();

console.log(jscb === jscb2); // true

var str = jscb.replaceAngleBrackets("<html>");
console.log(str);

