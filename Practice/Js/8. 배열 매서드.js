// 배열 선언
let arr = [1, 2, 3, 4, 5];

// push: 배열의 끝에 요소 추가
arr.push(6);
// arr: [1, 2, 3, 4, 5, 6]

// pop: 배열의 마지막 요소 제거
let lastElement = arr.pop(); // 5
// arr: [1, 2, 3, 4, 5]

// shift: 배열의 첫번째 요소 제거
let firstElement = arr.shift(); // 1
// arr: [2, 3, 4, 5]

// unshift: 배열의 앞에 요소 추가
arr.unshift(1);
// arr: [1, 2, 3, 4, 5]

// concat: 두 배열 합치기
let arr2 = [6, 7, 8];
let newArr = arr.concat(arr2);
// newArr: [1, 2, 3, 4, 5, 6, 7, 8]

// slice: 배열의 일부를 추출
let sliceArr = newArr.slice(2, 5); // [3, 4, 5]

// splice: 배열의 요소를 추가, 제거 또는 교체
newArr.splice(2, 2, "a", "b");
// newArr: [1, 2, 'a', 'b', 5, 6, 7, 8]

// forEach: 배열의 각 요소에 대해 함수 실행
newArr.forEach((e) => console.log(e)); // 1 2 a b 5 6 7 8

let mappedArr = newArr.map((e) => e.toString().toUpperCase());
// mappedArr: ["1", "2", "A", "B", "5", "6", "7", "8"]

// filter: 조건을 만족하는 요소로 구성된 새로운 배열 반환
let filteredArr = newArr.filter((e) => typeof e === "number");
// filteredArr: [1, 2, 5, 6, 7, 8]

// reduce: 배열을 하나의 값으로 줄이기
let sum = filteredArr.reduce((acc, e) => acc + e, 0); // 28

// find: 조건을 만족하는 첫 번째 요소 반환
let foundElement = newArr.find((e) => e === "a"); // "a"

// findIndex: 조건을 만족하는 첫 번재 요소의 인덱스 반환
let foundIndex = newArr.findIndex((e) => e === "a"); // 2
