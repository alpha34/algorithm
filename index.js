let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

let n = Number(input[0]);
let m = Number(input[1]);

let selected = [];
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}
// console.log("arr > ", arr);
let visited = new Array(n).fill(false);

let answer = "";
function dfs(arr, depth) {
  if (depth === m) {
    let result = [];
    for (i of selected) {
      result.push(arr[i]);
    }

    // console.log(result);

    for (x of result) {
      answer += x + " ";
    }
    answer += "\n";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
