// closure //

function sum(a, b) {
  const c = a + b;

  return function () {
    console.log(c);
  };
}
sum(1, 2)();

function debug(name) {
  return function (str) {
    console.log(`[${name}] ${str}`);
  };
}

const log = debug('Mouse');
log('Error happened');