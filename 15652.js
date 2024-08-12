let fs = require("fs");
let [N, M] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

// console.log(arr);

let selected = [];

let answer = "";
function dfs(arr, depth, start) {
  if (depth === M) {
    let result = [];
    for (j of selected) {
      result.push(arr[j]);
    }
    for (k of result) {
      answer += k + " ";
    }

    // console.log(answer);
    answer += "\n";
    return;
  }

  for (let i = start; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1, i);
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer);
