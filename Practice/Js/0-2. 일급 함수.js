const greet = function () {
  console.log("Hello");
};

const sayHello = greet;

sayHello(); // Hello

function executeFunction(fn) {
  fn();
}

executeFunction(greet);

function createGreeter() {
  return function () {
    console.log("new Hello");
  };
}

const newGreet = createGreeter();
newGreet();
