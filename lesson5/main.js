// arrow function expresssion
// fat arrow

// Part 2
var a = {
  name: 'AAA',
  run: function () {
    var run2 = function () {
      console.log(this.name);
    }.bind(a);
    run2();
  }
};
a.run();

var b = {
  name: 'BBB',
  run: function () {
    var run2 = function () {
      console.log(this.name);
    }.bind(this);
    run2();
  }
};
b.run();

var c = {
  name: 'CCC',
  run: function () {
    var that = this;
    var run2 = function () {
      console.log(that.name);
    };
    run2();
  }
};
c.run();

var d = {
  name: 'DDD',
  run: function () {
    var run2 = () => {
      console.log(this.name);
    };
    run2();
  }
};
d.run();

////////////////////////////
var a2 = {
  foo: 'Bar',
  run: function () {
    setTimeout(function () {
      console.log(this.foo);
    }.bind(this), 2000);
  }
};
a2.run();

var b2 = {
  foo: 'Bar',
  run: function () {
    setTimeout(function () {
      console.log(this.foo);
    }.bind(b2), 3000);
  }
};
b2.run();

var c2 = {
  foo: 'Bar',
  run: function () {
    var that = this;
    setTimeout(function () {
      console.log(that.foo);
    }, 4000);
  }
};
c2.run();

var d2 = {
  foo: 'Bar',
  run: function () {
    setTimeout( () => {
      console.log(this.foo);
    }, 5000);
  }
};
d2.run();