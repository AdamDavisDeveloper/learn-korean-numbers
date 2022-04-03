//App Settings
const NumberSystemSwitch = document.getElementById("NumberSystemSwitch");
const ColorSwitch = document.getElementById("ColorSwitch");

NumberSystemSwitch.addEventListener("click", (e) => {
	localStorage.setItem("number_system", e.target.checked);
});

ColorSwitch.addEventListener("click", (e) => {
	localStorage.setItem("colorize", e.target.checked);
});

function checkedLocal_System() {
	let checked = JSON.parse(localStorage.getItem("number_system"));
	NumberSystemSwitch.checked = checked == true;
}

function checkedLocal_Color() {
	let checked = JSON.parse(localStorage.getItem("colorize"));
	ColorSwitch.checked = checked == true;
}

window.addEventListener("DOMContentLoaded", () => {
	checkedLocal_System();
	checkedLocal_Color();
});
