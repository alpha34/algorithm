let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let N = Number(input[0]);
let arr = [];
for (let a = 1; a < input.length; a++) {
  arr.push(input[a].split(" ").map(Number));
}
// 커밋 테스트....
// 방문 여부
const visited = new Array(N).fill(false).map(() => new Array(N).fill(false));

console.log(N);
console.log(arr[1][3]);
// console.log(visited);

let min = 0;
let sum = 0;
function dfs(arr, depth, start, end) {
  if (depth === N) {
    console.log(sum);
    return;
  }
  console.log(visited);
  if (!visited[start][end]) {
    sum += arr[start][end];
  }

  // i가 스타트 지점
  for (let i = 0; i < N; i++) {
    visited[start][end] = false;
    dfs(arr, depth + 1, end, i);
    visited[start][end] = true;
  }
}

dfs(arr, 0, 0, 0);
