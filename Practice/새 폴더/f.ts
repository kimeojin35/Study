// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

// let [count, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
// count = Number(count);
// input = input.map(Number);

// solution(input, count);

// function solution(input, count) {
//   const dp = Array(input.length).fill(0);
//   dp[0] = input[0];
//   dp[1] = input[0] + input[1];
//   dp[2] = Math.max(input[0], input[1]) + input[2];

//   for (let i = 3; i < input.length; i += 1) {
//     dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
//   }
//   console.log(dp[count - 1]);
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", (line: number) => {
//   const MOD = 10007;

//   function a(n: number) {
//     let dp = new Array(n + 1).fill(0);
//     dp[1] = 1;
//     dp[2] = 2;

//     for (let i = 3; i <= n; i++) {
//       dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
//     }

//     return dp[n];
//   }
//   console.log(a(line));
//   rl.close();
// });

// rl.on("close", () => {
//   process.exit();
// });

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (N) => {
  N = parseInt(N);
  let count = 0;
  let num = 666;

  while (count < N) {
    if (String(num).includes("666")) {
      count++;
    }
    if (count < N) {
      num++;
    }
  }
  console.log(num);
  rl.close();
});
