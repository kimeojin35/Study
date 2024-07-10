// 숫자는 일급 객체
const number = 35;
const add = (a, b) => a + b;
const result = add(number, 5); // 함수의 인자로 숫자를 전달

// 객체는 일급 객체
const obj = { key: "value" };
const getKey = (o) => o.key;
const value = getKey(obj); // 함수의 인자로 객체를 전달
