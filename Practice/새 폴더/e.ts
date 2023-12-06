// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line) => {
//   function minOperationsToOne(N) {
//     const dp = new Array(N + 1).fill(0);

//     for (let i = 2; i <= N; i++) {
//       dp[i] = dp[i - 1] + 1;

//       if (i % 2 === 0) {
//         dp[i] = Math.min(dp[i], dp[i / 2] + 1);
//       }

//       if (i % 3 === 0) {
//         dp[i] = Math.min(dp[i], dp[i / 3] + 1);
//       }

//       if (i % 4 === 0) {
//         dp[i] = Math.min(dp[i], dp[i / 4] + 1);
//       }
//     }

//     return dp[N];
//   }

//   const input = Number(line);
//   const result = minOperationsToOne(input);
//   console.log(result);

//   rl.close();
// });

// rl.on("close", () => {
//   process.exit();
// });

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line: string[]) => {
//   console.log(parseInt(line[0]) / parseInt(line[2]));
//   rl.close();
// });

// rl.on("close", () => {
//   process.exit();
// });

// +-*/%

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (input) => {
//   const numbers = input.split(" ");
//   const A = parseInt(numbers[0]);
//   const B = parseInt(numbers[1]);
//   console.log(A + B);
//   console.log(A - B);
//   console.log(A * B);
//   console.log(Math.floor(A / B));
//   console.log(A % B);
//   rl.close();
// });

// rl.on("close", () => {
//   process.exit();
// });

function solution(triangle) {
  const height = triangle.length;

  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
}
