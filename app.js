/* 
	Coded w/ <3 by: Adam Davis

	--- Docs in Brief ---
	Options:
		-"number_system" and "colorize" are boolean keys
		in local storage. if number_system is false, app will
		render the Sino number system (true for Native).

		-colorize will run only when number_system == false (sino
		numbers) and the colorize local storage is set to true.

*/

const CardHTML = document.getElementById("InnerCard");
let remainingNumber; //inits as rand int 1-9999 - changes per 1000/100/10 factor

function foldWay(num, fold) {
	return Math.floor(num / fold);
}

// ---------- Sino Korean Algorithm ------------- //
const koreanSet = ["", "일", "이", "삼", "사", "오", "룍", "칠", "팔", "구"];
const koreanTen = "십";
const koreanOneHundred = "백";
const koreanOneThousand = "천";

function getSinoKorean() {
	remainingNumber = Math.floor(Math.random() * (9999 - 1 + 1) + 1);
	document.getElementById("BackText").innerHTML = remainingNumber;
	return `${getThousands()}${getHundreds()}${getTens()}${
		koreanSet[remainingNumber]
	}`;
}

function getThousands() {
	const thousands = foldWay(remainingNumber, 1000);
	if (thousands) {
		remainingNumber = remainingNumber % 1000;
		if (thousands == 1) return koreanOneThousand;
		else {
			return `
				${koreanSet[thousands]}
				<span class="colorize">${koreanOneThousand}</span>`;
		}
	} else return "";
}

function getHundreds() {
	const hundreds = foldWay(remainingNumber, 100);
	if (hundreds) {
		remainingNumber = remainingNumber % 100;
		if (hundreds == 1) return koreanOneHundred;
		else {
			return `
				${koreanSet[hundreds]}
				<span class="colorize">${koreanOneHundred}</span>`;
		}
	} else return "";
}

function getTens() {
	const tens = foldWay(remainingNumber, 10);
	if (tens) {
		remainingNumber = remainingNumber % 10;
		if (tens == 1) return koreanTen;
		else {
			return `
				${koreanSet[tens]}
				<span class="colorize">${koreanTen}</span>`;
		}
	} else return "";
}

function colorizer() {
	//Colorize 10s 100s 1000s if set in settings
	if (JSON.parse(localStorage.getItem("colorize"))) {
		document
			.querySelectorAll(".colorize")
			.forEach((span) => (span.style.color = "red"));
	}
}

// ---------- Native Korean Algorithm ------------- //
const nativeSet = [
	"",
	"하나",
	"둘",
	"셋",
	"넷",
	"다섯",
	"여섯",
	"일곱",
	"여덟",
	"아홉",
];

const nativeTens = {
	10: "열",
	20: "스물",
	30: "서른",
	40: "마흔",
	50: "쉰",
	60: "예순",
	70: "일흔",
	80: "여든",
	90: "아흔",
};

function getNativeKorean() {
	let koreanNum = ``;
	remainingNumber = Math.floor(Math.random() * (99 - 1 + 1) + 1);
	document.getElementById("BackText").innerHTML = remainingNumber; //set numeric text
	const tens = Object.keys(nativeTens).reverse();

	//Logic
	if (remainingNumber < 10) {
		koreanNum += nativeSet[remainingNumber];
		return koreanNum;
	} else {
		tens.forEach((ten) => {
			if (foldWay(remainingNumber, ten)) {
				remainingNumber = remainingNumber % ten;
				koreanNum += nativeTens[ten];
			}
		});
		return koreanNum + nativeSet[remainingNumber];
	}
}

//Master Run Function
function RunApp() {
	if (JSON.parse(localStorage.getItem("number_system"))) {
		document.getElementById("FrontText").innerHTML = getNativeKorean();
	} else {
		document.getElementById("FrontText").innerHTML = getSinoKorean();
		colorizer();
	}
}

//Generate new card content on page load
window.addEventListener("DOMContentLoaded", RunApp);

document.getElementById("GenerateBtn").addEventListener("click", RunApp);

// Adds flipping class (rotate 180deg) on click
CardHTML.addEventListener("click", () => {
	CardHTML.classList.toggle("is-flipped");
});
