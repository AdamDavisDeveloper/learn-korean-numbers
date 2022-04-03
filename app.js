const CardHTML = document.getElementById("InnerCard");

const koreanSet = ["", "일", "이", "삼", "사", "오", "룍", "칠", "팔", "구"];
const koreanTen = "십";
const koreanOneHundred = "백";
const koreanOneThousand = "천";

let remainingNumber; //inits as rand int 1-9999 - changes per 1000/100/10 factor

function foldWay(num, fold) {
	return Math.floor(num / fold);
}

function getSinoKorean() {
	remainingNumber = Math.floor(Math.random() * (9999 - 1 + 1) + 1);
	document.getElementById("BackText").innerText = remainingNumber;
	return `${getThousands()}${getHundreds()}${getTens()}${
		koreanSet[remainingNumber]
	}`;
}

function getThousands() {
	const thousands = foldWay(remainingNumber, 1000);
	if (thousands) {
		remainingNumber = remainingNumber % 1000;
		if (thousands == 1) return koreanOneThousand;
		else return `${koreanSet[thousands]}${koreanOneThousand}`;
	} else return "";
}

function getHundreds() {
	const hundreds = foldWay(remainingNumber, 100);
	if (hundreds) {
		remainingNumber = remainingNumber % 100;
		if (hundreds == 1) return koreanOneHundred;
		else return `${koreanSet[hundreds]}${koreanOneHundred}`;
	} else return "";
}

function getTens() {
	const tens = foldWay(remainingNumber, 10);
	if (tens) {
		remainingNumber = remainingNumber % 10;
		if (tens == 1) return koreanTen;
		else return `${koreanSet[tens]}${koreanTen}`;
	} else return "";
}

//Generate new card content on page load
window.addEventListener("DOMContentLoaded", () => {
	document.getElementById("FrontText").innerText = getSinoKorean();
});

document.getElementById("GenerateBtn").addEventListener("click", () => {
	document.getElementById("FrontText").innerText = getSinoKorean();
});

// Adds flipping class (rotate 180deg) on click
CardHTML.addEventListener("click", () => {
	CardHTML.classList.toggle("is-flipped");
});
