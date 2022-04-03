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
	return localStorage.getItem("number_system") || false;
}

function checkedLocal_Color() {
	return localStorage.getItem("colorize") || false;
}
