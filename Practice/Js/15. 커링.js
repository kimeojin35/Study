// 일반적인 함수
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// 커링된 함수
function curryAdd(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = curryAdd(2);
console.log(add2(3)); // 5

// 한 번에 모든 인자를 전달할 수도 있음
console.log(curryAdd(2)(3)); // 5
