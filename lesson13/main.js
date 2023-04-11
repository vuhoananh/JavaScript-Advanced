// inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log('Eating...');
  }
}

class Bird extends Animal {
  fly() {
    console.log('Flying...');
  }
}

const bird = new Bird('Thông');
bird.fly();

class Parrot extends Bird {
  speak() {
    console.log('Speaking...');
  }
}

const parrot = new Parrot('Thông');
parrot.speak();

///////////////////////////////
function Animal2(name) {
  this.name = name;
}

Animal2.prototype.eat = function() {
  console.log('Eating');
}

function Bird2(name) {
  Animal2.apply(this, arguments);
}

Bird2.prototype= new Animal2();