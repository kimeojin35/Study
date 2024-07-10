// 이름 가져오기
import { add, Multiply } from "./utils";

// 기본 가져오기
import subtract from "./utils";

// add 함수 사용 예제
const sum = add(5, 3);
console.log(`5 + 3 = ${sum}`);

// Multiply 클래스 사용 예제
const multiplier = new Multiply();
const product = multiplier.multiply(4, 7);
console.log(`4 * 7 = ${product}`);

// subtract 함수 사용 예제
const difference = subtract(10, 4);
console.log(`10 - 4 = ${difference}`);
