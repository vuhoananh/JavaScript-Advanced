// Array-like object

const names = ['Thanh', 'Trang', 'Thuy'];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

const obj = {
  0: 'Thanh',
  1: 'Trang',
  2: 'Thuy',
  length: 3
}

for (let i = 0; i < obj.length; i++) {
  console.log(obj[i]);
}

// arguments

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

sum(1, 2, 3, 4, 20, 30, 40);

function sum2() {
  const numbers = Array.from(arguments);
  return numbers.reduce(function (sum, num) {
    return sum + num;
  }, 0);
}

sum2(1, 2, 3, 4, 20, 30, 40);