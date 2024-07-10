function makeCounter() {
  let count = 0; // 클로저가 기억할 변수
  return function () {
    count++;
    return count;
  };
}

const counter1 = makeCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
