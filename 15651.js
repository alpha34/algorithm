let fs = require("fs");
let [N, M] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

// console.log(N);
// console.log(M);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

// console.log("arr > ", arr);

let selected = [];
let answer = "";
function dfs(arr, depth) {
  if (depth == M) {
    // console.log(selected);

    let result = [];
    for (let i of selected) {
      result.push(arr[i]);
    }
    for (let x of result) {
      answer += x + " ";
    }
    answer += "\n";

    return;
  }

  for (let i = 0; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }
}

dfs(arr, 0); // 시간 초과를 해결하려면, 배열을 넣어야 함.
console.log(answer);
