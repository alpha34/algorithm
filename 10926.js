let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim(); // trim을 넣어야 함

let n = input.toLocaleLowerCase() + "??!";

console.log(n);
