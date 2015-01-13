function makeString(ldelim, str, rdelim) {
   return ldelim + str + rdelim;
}

function quoteString(str) {
   return makeString("'",str,"'");
}

function barString(str) {
   return makeString("-", str, "-");
}

function namedEntity(str) {
   return makeString("&#", str, ";");
}

console.log(quoteString("apple")); // "'apple'"
console.log(barString("apple")); // "-apple-"

console.log(namedEntity(169)); // "&#169; - copyright symbol

