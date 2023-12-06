
// function maxStairScore(numOfStairs, scores) {
//   if (numOfStairs === 1) {
//     return scores[0];
//   }

//   const dp = new Array(numOfStairs);
//   dp[0] = scores[0];
//   dp[1] = Math.max(scores[0] + scores[1], scores[1]);

//   for (let i = 2; i < numOfStairs; i++) {
//     dp[i] = Math.max(
//       dp[i - 2] + scores[i],
//       dp[i - 3] + scores[i - 1] + scores[i]
//     );
//   }

//   return dp[numOfStairs - 1];
// }
// const numOfStairs = parseInt(line);
// const scores = [];

// for (let i = 0; i < numOfStairs; i++) {
//   const score = parseInt(line);
//   scores.push(score);
// }

// const result = maxStairScore(numOfStairs, scores);
// console.log(result);