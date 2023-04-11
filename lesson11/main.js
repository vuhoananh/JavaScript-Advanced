// constructor function

function Mouse(name) {
  this.name = name;
}

Mouse.prototype.run = function() {
  console.log(`${this.name} is running`);
}

const mickey = new Mouse('Miker');
mickey.run()

// object leterals

const jerry = {
  name : 'Jerry',
  run: function() {
    console.log(`${this.name} is running`);
  }
};

jerry.run();

// enhanced object leterals

const name = 'Tommy';
const cat = {
  name,
  run() {
    console.log(`${this.name} is running`);
  }
};
cat.run();