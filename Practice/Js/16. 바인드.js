const person = {
  name: "Hamster",
  greet: function (greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  },
};

const person2 = {
  name: "Cat",
};

// this 값 설정 X
person.greet("Hello", "!"); // Hello, Hamster!

// this 값 설정
const boundGreet = person.greet.bind(person2);
boundGreet("Hello", "!"); // Hello, Cat!

// 부분 적용 함수
const boundGreetWithHello = person.greet.bind(person2, "Hello");
boundGreetWithHello("!"); // Hello, Cat!
boundGreetWithHello("."); // Hello, Cat.

// this 값과 인수 모두 설정
const boundGreetFully = person.greet.bind(person, "Hi", "!");
boundGreetFully(); // Hi, Hamster!

// 문제
const newPerson = {
  name: "amin",
  greetArrow: () => {
    console.log(`Inside greetArrow`);
  },
  greetFunction: function () {
    console.log(``);
  },
};
