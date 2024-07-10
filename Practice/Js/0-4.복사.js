// 배열의 얕은 복사

// 1. 스프레드 연산자 (Spread Operator)
let originalArray1 = [1, 2, 3];
let copiedArray1 = [...originalArray1];

copiedArray1.push(4);
console.log("스프레드 연산자 - 원본배열1:", originalArray1);
console.log("스프레드 연산자 - 복사배열1:", copiedArray1);

// 2. Array.prototype.slice
let originalArray2 = [1, 2, 3];
let copiedArray2 = originalArray2.slice();

copiedArray1.push(4);
console.log("슬라이스 - 원본배열1:", originalArray2);
console.log("슬라이스 - 복사배열1:", copiedArray2);

// 객체의 얕은 복사

// 1. 스프레드 연산자 (Spread Operator)
let originalObject1 = [1, 2, 3];
let copiedObject1 = [...originalObject1];

copiedObject1.push(4);
console.log("스프레드 연산자 - 원본배열1:", originalObject1);
console.log("스프레드 연산자 - 복사배열1:", copiedObject1);

// 2. Object.prototype.slice
let originalObject2 = [1, 2, 3];
let copiedObject2 = originalObject2.slice();

copiedObject1.push(4);
console.log("슬라이스 - 원본배열1:", originalObject2);
console.log("슬라이스 - 복사배열1:", copiedObject2);

// 얕은 복사 예제 (배열)
let originalArray = [{ a: 1 }, { b: 2 }];
let shallowCopiedArray = [...originalArray];

shallowCopiedArray[0].a = 10;
console.log("원본배열:", originalArray);
console.log("얕은복사배열:", shallowCopiedArray);

// 얕은 복사 예제 (객체)
let originalObject = { a: 1, b: { c: 2 } };
let shallowCopiedObject = [...originalObject];

shallowCopiedObject[0].a = 10;
console.log("원본객체:", originalObject);
console.log("얕은복사객체:", shallowCopiedObject);

// 깊은 복사 예제
let originalObjectDeep = { a: 1, b: { c: 2 } };
let deepCopiedObject = JSON.parse(JSON.stringify(...originalObjectDeep));

shallowCopiedArray[0].a = 10;
console.log("원본객체:", originalObjectDeep);
console.log("깊은복사객체:", deepCopiedObject);
