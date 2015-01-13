var charSet = ["**","bb","cd","**","cc","**","dd","**"];

var newArray = charSet.filter(function(element) {
    return (element !== "**");
});
    
console.log(newArray); // ["bb", "cd", "cc", "dd"]
