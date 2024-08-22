let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
// console.log(input);

let maxValue = -Infinity; // 마이너스인 경우 고려 필요
let x = 0;
let y = 0;

for (let i = 0; i < input.length; i++) {
  const arr2 = input[i].trim().split(" ").map(Number);
  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] > maxValue) {
      x = i + 1;
      y = j + 1;
      maxValue = arr2[j];
    }
  }
}

console.log(maxValue);
console.log(x + " " + y);
