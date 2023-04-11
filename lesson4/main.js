// arrow function expresssion
// fat arrow

// Part 1
function sum(a, b) {
  return a + b;
};
sum(1, 2);

var sum2 = function (a, b) {
  return a + b;
};
sum2(3, 2);

var sum3 = (a, b) => {
  return a + b;
};
sum3(4, 8);

var sum4 = (a, b) => a + b;
sum4(5, 5);

// var square = (x) => x*x;
var square = x => x * x;
square(5);

var doSomething = () => Date.now();
doSomething();

var arr = [1, 2, 3];
arr.map(x => x * x);