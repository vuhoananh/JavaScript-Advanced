// call

function greeting() {
  console.log(`Hi! ${this.name}. I am ${this.age}.`);
}

const cat = {
  name: 'Tom',
  age: '100',
}

greeting.call(cat)