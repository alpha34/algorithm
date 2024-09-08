let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let answer = "";
let maxRowLength = 0;

for (let i = 0; i < input.length; i++) {
  if (maxRowLength < input[i].length) {
    maxRowLength = input[i].length;
  }
}

// console.log(maxRowLength);

for (let k = 0; k < maxRowLength; k++) {
  for (let i = 0; i < input.length; i++) {
    // console.log(input[i][k]);

    if (input[i][k]) {
      answer += input[i][k];
    }
  }
}

console.log(answer);
