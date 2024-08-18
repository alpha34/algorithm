let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let [N, M] = input[0].split(" ").map(Number);

let arr1 = [];
let arr2 = [];

for (let i = 1; i <= N; i++) {
  arr1.push(input[i].split(" ").map(Number));
}

for (let k = N + 1; k < input.length; k++) {
  arr2.push(input[k].split(" ").map(Number));
}

let answer = [];
for (let i = 0; i < N; i++) {
  let temp = [];
  for (let k = 0; k < M; k++) {
    temp.push(arr1[i][k] + arr2[i][k]);
  }
  answer.push(temp);
}

let answerString = "";
for (let x of answer) {
  for (let y of x) {
    answerString += y + " ";
  }
  answerString += "\n";
}

console.log(answerString);
