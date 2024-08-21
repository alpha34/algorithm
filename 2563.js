let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

const arr2 = Array.from(Array(100), () => Array(100).fill(0));

let num = input[0];

let sum = 0;

for (let i = 1; i <= num; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  for (let k = a; k < a + 10; k++) {
    for (let p = b; p < b + 10; p++) {
      if (arr2[k][p] === 1) {
        continue;
      } else {
        arr2[k][p] = 1;
        sum++;
      }
    }
  }
}

console.log(sum);
