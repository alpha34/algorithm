let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n").map(Number);

let cnt = input[0];
let temp = ["", "+", "-"];
let n;
let arr = [];
for (let i = 1; i <= cnt; i++) {
  n = input[i];

  arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  dfs([], 0);
  console.log("");
}

function dfs(temp2, depth) {
  if (depth == n - 1) {
    let str = "";
    for (let i = 0; i < n - 1; i++) {
      str += arr[i] + temp2[i];
    }
    str += arr[n - 1];

    if (eval(str) === 0) {
      console.log(str);
    }

    return;
  }

  for (let i = 0; i < temp.length; i++) {
    temp2.push(temp[i]);
    dfs(temp2, depth + 1);
    temp2.pop();
  }
}
