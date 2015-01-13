var firstDate = new Date();

setTimeout(function() {
  doEvent(firstDate);
}, 25000);

function doEvent() {
  var secondDate = new Date();
  var diff = secondDate - firstDate;
  console.log(diff); // approx. 25000
}
