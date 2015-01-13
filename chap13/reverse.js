// web worker thread - reverses array
onmessage = function(event) {

   var reverseArray = function(x,indx,str) {
      return indx == 0 ? str :
                     reverseArray(x,--indx,(str+= " " + x[indx]));;
   }

   // reverse array
   var str = reverseArray(event.data, event.data.length, "");

   // return resulting string to main application
   postMessage(str);
};

