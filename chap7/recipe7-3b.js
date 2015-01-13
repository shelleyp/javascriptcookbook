var accounting = require('accounting');

var options = {
	symbol : "$",
	decimal : ".",
	thousand: ",",
	precision : 2,
	format: "%s%v"
};

// Example usage:
var m = accounting.formatMoney(45998307); // $45,998,307.00 
console.log(m);

var list = [[456, 12, 3], [99, 23,3],[667,902,12]];
var c = accounting.formatColumn(list);
console.log(c);

var p = accounting.formatMoney(4899.49, "€", 2, ".", ",");  
console.log(p); // €4.899,49
