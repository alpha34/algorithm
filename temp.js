let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let count = Number(input[0]);
let arrNumber = input[1].split(" ").map(Number);

let answer = 1;
let num;
for (let i = 0; i < arrNumber.length; i++) {
  num = arrNumber[i];
  for (let k = i + 1; k < arrNumber.length; k++) {
    if (num < arrNumber[k]) {
      // 기준 숫자보다 다음 숫자가 큰 경우
      num = arrNumber[k];
      answer++;
      console.log("answer ++ ");
      break;
    }
    console.log("num -> ", num);
    console.log("arrNumber -> ", arrNumber[k]);
    if (num - 1 === arrNumber[k]) {
      num = arrNumber[k];
      const newArr = arrNumber.filter((item) => item !== num);
      arrNumber = [...newArr];
      console.log(arrNumber);
    } else {
      // answer++;
    }
  }
}

console.log(answer);
