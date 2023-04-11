// hoisting

var x = 5;
function run() {
  var x = 10;
  console.log(x);
}

run();