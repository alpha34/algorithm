let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

// console.log(input[0]);
// console.log(input[1]);

let N = input[0];
let M = input[1];

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let answer = [];
function dfs(propsArr, depth) {
  if (depth === M) {
    console.log(answer);

    return;
  }

  for (let i = 0; i < N; i++) {
    answer.push(arr[i]);
    dfs(propsArr, depth + 1);
    answer.pop();
  }
}

dfs(arr, 0);
