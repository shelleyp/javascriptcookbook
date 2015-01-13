var moneyAPI1 = "https://openexchangerates.org/api/latest.json?app_id=yourapid";
var moneyAPI2 = "http://openexchangerates.org/api/currencies.json?app_id=yourappid";
  
$.getJSON(moneyAPI1).done(function( data ) {
    $.getJSON(moneyAPI2).done(function(data2) {
        var rates = data.rates;
        var keys = Object.keys(rates);
        for (var i = 0; i < keys.length; i++) {
              var rate = rates[keys[i]];
              var name = data2[keys[i]];
              console.log(name + " " + rate);
        }
     });
});
