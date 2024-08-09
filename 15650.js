let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

let N = input[0];
let M = input[1];

let arr = [];
let visited = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
  visited.push(false);
}

let selected = [];

function dfs(propsArr, depth, start) {
  let answer = "";

  if (depth === M) {
    for (let k = 0; k < selected.length; k++) {
      answer += selected[k] + " ";
    }
    console.log(answer);

    return;
  }

  for (let i = start; i < N; i++) {
    // start 지점부터 하나씩 원소 인덱스를 확인하며
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    dfs(propsArr, depth + 1, i + 1); // 조합이므로, 재귀 함수 호출 시 다음 인덱스 넣기
    visited[i] = false;
    selected.pop();
  }
}

dfs(arr, 0, 0);
