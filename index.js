let fs = require("fs");
let [N, M] = fs.readFileSync("dev/stdin").toString().split(" ").map(Number);

// console.log(N);
// console.log(M);

let arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i); // [1,2,3,4]
}

// console.log("arr > ", arr);

let selected = [];
function dfs(props, depth, start) {
  if (depth === M) {
    // console.log(selected);
    let answer = "";
    for (let i = 0; i < selected.length; i++) {
      answer += selected[i] + " ";
    }
    console.log(answer);
    return;
  }

  for (let i = start; i < N; i++) {
    //N:4  i:1
    selected.push(arr[i]);
    dfs(props, depth + 1, i);
    selected.pop();
  }
}

dfs(arr, 0, 0);
