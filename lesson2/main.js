// var let const
// 1. declaration (khai báo biến)
var a  = 1;
let a  = 2;
const a  = 3;
console.log(a, b, c);

var a  = 4;
console.log(a);

// 2. hoisting
function run () {
  console.log(a);
  let a = 1;
}
run();

// 3. block scope (if, for,)
if(true) {
  var x = 10;
}
console.log(x);

for ( var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);

for ( let i = 0; i < 10; i+=2) {
  console.log(i);
}