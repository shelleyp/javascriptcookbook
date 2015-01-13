var charSets = ["ab","bb","cd","ab","cc","ab","dd","ab"];

// replace element
while (charSets.indexOf("ab") != -1) {
   charSets.splice(charSets.indexOf("ab"),1,"**");
}
console.log(charSets); // ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]

// delete new element
while(charSets.indexOf("**") != -1) {
   charSets.splice(charSets.indexOf("**"),1);
}
console.log(charSets); // ["bb", "cd", "cc", "dd"]

