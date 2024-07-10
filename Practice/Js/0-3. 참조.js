// 배열 참조
let originalArray = [1, 2, 3];
let referenceArray = originalArray;

referenceArray.push(4);
console.log("원본배열:", originalArray); // [ 1, 2, 3, 4 ]
console.log("참조배열:", referenceArray); // [ 1, 2, 3, 4 ]

// 객체 참조
let originalObject = { a: 1, b: 2 };
let referenceObject = originalObject;

referenceObject.b = 0;
referenceObject.c = -1;
console.log("원본객체:", originalObject); // { a: 1, b: 0, c: -1 }
console.log("참조객체:", referenceObject); // { a: 1, b: 0, c: -1 }
