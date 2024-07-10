function* customGenerator(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

const generator = customGenerator(1, 5);

for (const num of generator) {
  console.log(num);
}

function* generateSequence() {
  console.log("yield 1");
  yield 1;
  console.log("yield 2");
  yield 2;
  console.log("yield 3");
  yield 3;
  console.log("end");
}

const generator2 = generateSequence();

console.log(generator2.next());
// yield 1 { value: 1, done: false }
console.log(generator2.next());
// yield 2 { value: 2, done: false }
console.log(generator2.next());
// yield 3 { value: 3, done: false }
console.log(generator2.next());
// end { value: undefined, done: true }
