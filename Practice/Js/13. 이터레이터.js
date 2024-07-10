const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
// { value: 1, done: false }
console.log(iterator.next());
// { value: 2, done: false }
console.log(iterator.next());
// { value: 3, done: false }
console.log(iterator.next());
// { value: undefined, done: true }

const customIterable = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

for (const num of customIterable) {
  console.log(num); // 1 2 3 4 5
}
