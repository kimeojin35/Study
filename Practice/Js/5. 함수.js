// 함수 선언문
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// 함수 표현식
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 3)); // 6

// 화살표 함수
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(5, 2)); // 3
