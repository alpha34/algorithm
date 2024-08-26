let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let testCase = Number(input[0]); // 테스트 케이스 수
let line = 1;

while (testCase--) {
  // 가로길이(M), 세로 길이(N), 배추가 심어져 있는 위치의 개수(K)
  let [m, n, k] = input[line].split(" ").map(Number);
  let graph = [];

  // 그래프를 0으로 초기화
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m).fill(0);
  }

  // 배추 위치 입력받아 그래프에 1로 표시
  for (let i = 0; i < k; i++) {
    let [y, x] = input[line + 1 + i].split(" ").map(Number);
    graph[x][y] = 1;
  }

  let answer = 0; // 연결 요소의 수 계산
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 현재 위치에 배추가 있으면 DFS 수행
      if (dfs(graph, n, m, i, j)) {
        answer++;
      }
    }
  }

  // 다음 테스트 케이스로 이동
  line += k + 1;
  console.log(answer);
}

function dfs(graph, n, m, x, y) {
  // 주어진 범위를 벗어나는 경우에는 즉시 종료
  if (x < 0 || x >= n || y < 0 || y >= m) {
    return false;
  }

  // 현재 노드를 아직 처리하지 않았다면
  if (graph[x][y] == 1) {
    // 해당 노드 방문 처리
    graph[x][y] = -1;

    // 상, 하, 좌, 우의 위치들도 모두 재귀적으로 호출
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);

    return true;
  }

  return false;
}
