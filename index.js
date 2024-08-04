let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

let N = Number(input[0]);
let cnt = 0;
let queens = [];

function possible(x, y) {
  for (let [a, b] of queens) {
    if (a == x || b == y) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}

function dfs(row) {
  if (row === N) {
    cnt += 1;
  }

  for (let i = 0; i < N; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);
console.log(cnt);
