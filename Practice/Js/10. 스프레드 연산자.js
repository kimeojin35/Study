// 배열에서의 스프레드 연산자 사용
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 배열 복사
const copiedArr = [...arr1];
console.log("복사 배열:", copiedArr); // [1, 2, 3]

// 배열 결합
const combinedArr = [...arr1, ...arr2];
console.log("결합 배열:", combinedArr);

// 배열 요소 추가
const newArr = [0, ...arr1, 4];
console.log("새 배열:", newArr);

// 객체에서의 스프레드 연산자 사용
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// 객체 복사
const copiedObj = { ...obj1 };
console.log("복사 객체:", copiedObj);

// 객체 결합
const combinedObj = { ...obj1, ...obj2 };
console.log("결합 객체:", combinedObj);

// 객체 프로퍼티 추가
const newObj = { ...obj1, e: 5 };
console.log("새 객체:", newObj);
