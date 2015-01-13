var dtstr= "2014-3-04T19:35:32Z";

dtstr = dtstr.replace(/\D/g," ");
var dtcomps = dtstr.split(" ");

// modify month between 1 based ISO 8601 and zero based Date
dtcomps[1]--;

var convdt = new Date(Date.UTC.apply(null,dtcomps));

console.log(convdt.toString()); // Tue, 04 Mar 2014 19:35:32 GMT
