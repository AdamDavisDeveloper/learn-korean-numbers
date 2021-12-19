/* 
~~ plan ~~

1. Generate a random number between 1-9999
2. Convert that number to sino-korean by:
    -Finding how many times 1000 can go into that number (if 0, move on)
    -Finding how many times 100 can go into that number (if 0, move on)
    -Finding how many times 10 can go into that number (if 0, move on)
    -Finding the remainder after the number is divided by 10

3. Take the number of 1000s, 100s, 10s (if any) and convert that to Korean followed
   by the 1000/100/10 korean word
4. Add the remainder korean number to the end 
*/

const testNum = 112;

const englishKoreanSet = [
  "",
  "일",
  "이",
  "삼",
  "사",
  "오",
  "룍",
  "칠",
  "팔",
  "십",
];

const oneHundred = "백";
const oneHundred = "천";

function foldWay(num, fold) {
  //returns number of times "num" goes into "fold"
  return Math.floor(num / fold);
}

function getSinoKorean() {
  const hundreds = foldWay(randInt, 100);
  const tens = foldWay(randInt, 10);

  return;
}

console.log(foldWay(testNum, 10));
