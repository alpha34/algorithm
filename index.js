let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n").map(Number);
// console.log(input);

let arr = [];
let n;
for (let i = 1; i <= input[0]; i++) {
  n = input[i];

  arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  dfs([], 0);
  console.log("");
}

function dfs(propsArr, depth) {
  let answer = "";
  for (let i = 0; i < n - 1; i++) {
    answer += arr[i] + propsArr[i];
  }
  answer += arr[n - 1];

  if (depth === n - 1) {
    if (eval(answer) === 0) {
      console.log(answer);
    }
    return;
  }

  for (let a of ["", "+", "-"]) {
    propsArr.push(a);
    dfs(propsArr, depth + 1);
    propsArr.pop();
  }
}
