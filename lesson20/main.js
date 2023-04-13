// ...spread an array

const a = [1, 2, 3];
const b = [0, ...a, 4];
console.log(b);

// ...spread an object
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: { e: 10 }
};
console.log(obj1);

const obj2 = {
  ...obj1,
  z: 1000
};
console.log(obj2);

let obj3 = {};
for (let key in obj1) {
  obj3[key] = obj1[key];
}
obj3.c=5;
obj3.d.e=20;
console.log({obj1,obj3});