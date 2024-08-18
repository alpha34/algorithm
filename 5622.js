let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("");
// console.log(input);

let dial = {
  1: [],
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
};
let sum = 0;
for (let i of input) {
  for (let k = 1; k <= 9; k++) {
    if (dial[k].includes(i)) {
      // console.log(k);
      sum += k;
    }
  }
}

console.log(sum + input.length);
