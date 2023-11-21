// //Top-Down
// function TD(n, memo = {}) {
//   if (n <= 1) {
//     return n;
//   }
//   if (memo[n]) {
//     return memo[n];
//   }
//   memo[n] = TD(n - 1, memo) + TD(n - 2, memo);

//   return memo[n];
// }

// console.log(TD(30));

// //Bottom-Up
// function BU(n) {
//   if (n <= 1) {
//     return n;
//   }

//   let fib = new Array(n + 1);
//   fib[0] = 0;
//   fib[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }

//   return fib[n];
// }

// console.log(BU(30));
