const koreanSet = ["", "일", "이", "삼", "사", "오", "룍", "칠", "팔", "구"];

const koreanTen = "십";
const koreanOneHundred = "백";
const koreanOneThousand = "천";

let remainingNumber;

function foldWay(num, fold) {
	//returns number of times "num" goes into "fold"
	return Math.floor(num / fold);
}

function getSinoKorean() {
	remainingNumber = Math.floor(Math.random() * (9999 - 1 + 1) + 1);
	console.log(remainingNumber);
	return `${getThousands(remainingNumber)}${getHundreds(
		remainingNumber
	)}${getTens(remainingNumber)}${koreanSet[remainingNumber]}`;
}

function getThousands(int) {
	const thousands = foldWay(int, 1000);
	if (thousands) {
		remainingNumber = remainingNumber % 1000;
		if (thousands == 1) return koreanOneThousand;
		else return `${koreanSet[thousands]}${koreanOneThousand}`;
	} else return "";
}

function getHundreds(int) {
	const hundreds = foldWay(int, 100);
	if (hundreds) {
		remainingNumber = remainingNumber % 100;
		if (hundreds == 1) return koreanOneHundred;
		else return `${koreanSet[hundreds]}${koreanOneHundred}`;
	} else return "";
}

function getTens(int) {
	const tens = foldWay(int, 10);
	if (tens) {
		remainingNumber = remainingNumber % 10;
		if (tens == 1) return koreanTen;
		else return `${koreanSet[tens]}${koreanTen}`;
	} else return "";
}
