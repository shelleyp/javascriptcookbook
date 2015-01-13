// web worker thread - loads file 
onmessage = function(event) {

   function handleFile(loadFile) {
     var reader = new FileReaderSync();
     var txt = reader.readAsText(loadFile);
     postMessage(txt);
   }

   var str = handleFile(event.data);
 
};
