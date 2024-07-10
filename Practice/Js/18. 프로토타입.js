function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`이름: ${this.name} 나이: ${this.age}`);
};

const hamster = new Person("Hamster", 18);
const cat = new Person("Cat", 3);

hamster.greet(); // 이름: Hamster 나이: 18
cat.greet(); // 이름: Cat 나이: 3

function PersonWithPrototype(name, age) {
  this.name = name;
  this.age = age;
}

PersonWithPrototype.prototype.greet = function () {
  console.log(`이름: ${this.name} 나이: ${this.age}`);
};

function PersonWithConstructor(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`이름: ${this.name} 나이: ${this.age}`);
  };
}

const alicePrototype = new PersonWithPrototype("Hamster");
