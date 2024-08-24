let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let n = Number(input[0]); // 컴퓨터 수
let m = Number(input[1]); // 컴퓨터의 쌍의 수

// console.log(n);
// console.log(m);

let graph = []; // 그래프 정보
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let j = 2; j <= m + 1; j++) {
  let [x, y] = input[j].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let cnt = 0;
let visited = new Array(n + 1).fill(false);

// console.log(graph);
function dfs(x) {
  // 깊이우선 탐색 수행
  visited[x] = true; // 현재 노드 방문 처리
  cnt++;
  for (let y of graph[x]) {
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    if (!visited[y]) {
      dfs(y);
    }
  }
}

dfs(1);
console.log(cnt - 1);

// console.log(graph);
