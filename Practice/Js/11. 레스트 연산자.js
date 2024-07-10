// 함수 매개변수에서의 레스트 연산자 사용
function sum(...num) {
  return num.reduce((total, n) => total + n, 0);
}
console.log("합:", sum(1, 2, 3, 4)); // 합: 10

// 가변 인자 함수 예제
function greet(first, ...rest) {
  console.log("일등:", first); // 일등: Hamster
  console.log(`나머지: ${rest.join(", ")}`); // 나머지: Cat, Dog
}
greet("Hamster", "Cat", "Dog");

// 배열 구조 분해에서의 레스트 연산자 사용
const [firstElement, ...otherElements] = [1, 2, 3, 4, 5];
console.log("첫번째 개체:", firstElement); //첫번째 개체: 1
console.log("나머지 개체:", otherElements); // 나머지 개체: [ 2, 3, 4, 5 ]

// 객체 구조 분해에서의 레스트 연산자 사용
const person = { name: "Hamster", age: 18, job: "Student" };
const { name, ...otherDetails } = person;
console.log("이름:", name); // 이름: Hamster
console.log("나머지:", otherDetails); // 나머지: { age: 18, job: 'Student' }
