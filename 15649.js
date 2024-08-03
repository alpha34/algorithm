let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);

let arr = [];
let visited = new Array(n).fill(false);
for (let i = 1; i <= m; i++) {
  arr.push(i);
}

let selected = [];

function dfs(arr, depth) {
  if (depth === arr.length) {
    console.log(selected);
    return;
  }

  for (let i = 1; i <= arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

dfs(arr, 0);
// cosole.log(answer);
