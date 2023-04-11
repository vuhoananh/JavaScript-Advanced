// ...rest

function log(...numbers) {
  console.log(numbers);
  console.log(arguments);
}

log(1, 2, 3, 4);

////////////////////////////

function sum(...nums) {
  return nums.reduce((a, b) => {
    return a + b;
  }, 0); 
}

sum(1, 2, 3, 4, 5);

function concat(separator, ...strings) {
  return strings.join(separator);
}

concat('.','a','b','c') //a.b.c