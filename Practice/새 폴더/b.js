const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [a, b] = line.split(" ");
  let num = 1;
  let arr = new Array(Number(a));

  for (let i = 0; i < a; i++) {
    arr[i] = new Array(Number(b));
    for (let j = 0; j < b; j++) {
      arr[i][j] = num;
      num++;
    }
  }
  num = 1;
  console.log(arr);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
