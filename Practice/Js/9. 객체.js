// 객체 선언
let person = {
  name: "Hamster",
  age: 18,
  greet: function () {
    console.log(`안녕, 내 이름은 ${this.name}`);
  },
  greetAnother() {
    // 메서드 축약 표현
    console.log(`안녕, 내 이름은 ${this.name}`);
  },
};

// 프로퍼티 접근 및 메서드 호출
console.log(person.name); // Hamster
person.greet(); // 안녕, 내 이름은 Hamster
person.greetAnother(); // 안녕, 내 이름은 Hamster

// 동적 프로퍼티 추가, 변경, 삭제
person.gender = "male"; // 동적 프로퍼티 추가
console.log(person.gender); // male
person.age = 8; // 동적 프로퍼티 추가
console.log(person.age); // 8
delete person.gender; // 동적 프로퍼티 삭제
console.log(person.gender); // undefined

// 객체 구조 분해 할당
let { name, age } = person;
console.log(name); // Hamster
console.log(age); // 8

// 다른 변수 이름으로 할당
let { name: personName, age: personAge } = person;
console.log(personName); // Hamster
console.log(personAge); // 8

// 객체 메서드
let keys = Object.keys(person);
// keys: ['name', 'age', 'greet', 'greetAnother']
let values = Object.values(person);
// values: ['Hamster', 8, [Function: greet], [Function: greetAnother]]
let entries = Object.entries(person);
// entries: [[ 'name', 'Hamster' ], [ 'age', 8 ], [ 'greet', [Function: greet] ],[ 'greetAnother', [Function: greetAnother]]]

// Object.assign
let additionalInfo = { country: "Korea" };
let updatedPerson = Object.assign({}, person, additionalInfo);

// Object.freeze
Object.freeze(person);
person.age = 18; // 변경 시도 무시됨
console.log(person.age); // 8

// Object.seal
let sealedPerson = { name: "Ham", age: 19 };
Object.seal(sealedPerson);
sealedPerson.age = 20; // 변경 가능
sealedPerson.gender = "female"; // 추가 불가
console.log(sealedPerson.age); // 20
console.log(sealedPerson.gender); // undefined
