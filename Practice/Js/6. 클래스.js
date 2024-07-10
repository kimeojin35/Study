class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`이름: ${this.name} 나이: ${this.age}`);
  }

  haveBirthday() {
    this.age++;
    console.log(`이제 ${this.age}살이 되었습니다`);
  }
}

const person1 = new Person("Hamster", 18);
person1.greet(); // 이름: Hamster 나이: 18
person1.haveBirthday(); // 이제 19살이 되었습니다
