let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

console.log(input[0].length);

const N = Number(input[0]);

for (let i = 1; i < N; i++) {
  let sum = i;
  let str = i.toString();

  console.log("str >>> ", str.length);
  for (let j = 0; j < str.length; j++) {
    sum += parseInt(str[j]);
  }

  if (sum === N) {
    return console.log(i);
  }
}
return 0;
