let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ");

let num = Number(input[0]);

let arr = [];
let createArr = [];
let answer = "";
let visited = new Array(num).fill(false);

for (let i = 1; i <= num; i++) {
  arr.push(i);
}
// console.log(visited);
function dfs(array, idx) {
  if (num === createArr.length) {
    for (let x of createArr) {
      answer += x + " ";
    }
    answer += "\n";
    return;
  }

  for (let i = 0; i < num; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    createArr.push(arr[i]);
    dfs(array, idx + 1);
    visited[i] = false;
    createArr.pop();
  }
}

dfs(arr, 0);
console.log(answer);
