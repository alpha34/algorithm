let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(" ");
let N = input[0];
let B = Number(input[1]);

let obj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  O: 24,
  P: 25,
  Q: 26,
  R: 27,
  S: 28,
  T: 29,
  U: 30,
  V: 31,
  W: 32,
  X: 33,
  Y: 34,
  Z: 35,
};

// console.log(obj["Z"]);

let tenNum = 0;
let len = N.length;
for (let i = 0; i < len; i++) {
  let val = obj[N[i]];
  tenNum += val * Math.pow(B, len - 1 - i); // 여기서 지수 계산이 제대로 되도록 변경
}

console.log(tenNum);
