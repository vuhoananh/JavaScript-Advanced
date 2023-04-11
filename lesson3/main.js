// global context
// function context
// bind
var mouse ={
  name: 'Mickey',
  sayHi: function() {
    console.log('Hi, my name is', this.name);
  }
};

var cat = {
  name: 'Tom'
}

// mouse.sayHi();
var say1 = mouse.sayHi.bind(mouse);
var say2 = mouse.sayHi.bind(cat);
say1();
say2();

////////////////////
function run (cb){
  console.log('run...');
  cb();
}
var mouse = {
  name: 'Mickey',
  sayHi: function(){
    console.log(this.name);
  }
};
run(mouse.sayHi.bind(mouse));