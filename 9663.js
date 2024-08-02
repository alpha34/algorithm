let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString();

let n = Number(input);
let cnt = 0;
let queens = []; // 현재 체스판에 놓인 퀸의 위치 정보들

function possible(x, y) {
  for (let [a, b] of queens) {
    if (a == x || b == y) return false;
    if (Math.abs(a - x) == Math.abs(b - y)) return false;
  }
  return true;
}

function dfs(row) {
  if (row === n) {
    cnt += 1; // 퀸(queen)을 N개 배치할 수 있는 경우 카운트
  }

  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);
console.log(cnt);
