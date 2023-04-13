// destructuring

// const arr = [10,20,30,40,50];
// const[a,b,c,d,e] = arr;
// const[a,,,,e] = arr;
// const[a,...b] = arr;
// console.log(a,b);

const obj ={
  a: 1,
  b: 2,
  c: 3
}
const {a: x,b: y,c: z}=  obj;
console.log(x,y,z);

const {a,...c}=  obj;
console.log(x,z);