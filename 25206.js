let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let score = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let sum = 0.0; // 총 학점
let totalScore = 0.0; // 성적 총합

for (let i of input) {
  let [subject, credit, grade] = i.split(" ");
  credit = parseFloat(credit); // 학점을 숫자로 변환

  if (grade !== "P") {
    totalScore += credit * score[grade]; // 성적에 학점 곱하기
    sum += credit; // 학점 더하기
  }
}

let cacul = totalScore / sum; // 평점 계산
console.log(cacul.toFixed(6)); // 소수점 6자리까지 출력
