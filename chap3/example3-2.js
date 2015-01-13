// Memoized Function
var fibonacci = function () {
var memo = [0,1];
var fib = function (n) {
var result = memo[n];
if (typeof result != "number") {
result = fib(n -1) + fib(n - 2);
memo[n] = result;
}
return result;
};
return fib;
}();
// nonmemoized function
var fib = function (n) {
return n < 2 ? n : fib(n - 1) + fib(n - 2);
};
// run nonmemo function, with timer
console.time("non-memo");
for (var i = 0; i <= 10; i++) {
console.log(i + " " + fib(i));
}
console.timeEnd("non-memo");
// now, memo function with timer
console.time("memo");

for (var i = 0; i <= 30; i++) {
console.log(i + " " + fibonacci(i));
}
console.timeEnd("memo");

