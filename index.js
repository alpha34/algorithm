let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

// console.log(input[0]);
// console.log(input[1]);

let N = input[0];
let M = input[1];

let arr = [];
let temp = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
  temp.push(false);
}

// console.log(temp);
let answer = [];

function dfs(propsArr, depth, start) {
  let answer2 = "";

  if (depth === M) {
    for (let k = 0; k < answer.length; k++) {
      answer2 += answer[k] + " ";
    }
    console.log(answer2);

    return;
  }

  for (let i = start; i < N; i++) {
    if (temp[i]) continue;
    temp[i] = true;
    answer.push(arr[i]);
    dfs(propsArr, depth + 1, i + 1); 
    temp[i] = false;
    answer.pop();
  }
}

dfs(arr, 0, 0);
