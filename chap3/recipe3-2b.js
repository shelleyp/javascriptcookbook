var orderArray = function(x,indx,str) {
  return indx == x.length-1 ? str : orderArray(x,++indx,(str+=x[indx] + " "));
}

var arr = ['apple','orange','peach','lime'];
var str = orderArray(arr,-1,"");
console.log(str);
