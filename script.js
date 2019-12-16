var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+color1.value 
	+ ", "
	+color2.value
	+")";

	css.textContent = body.style.background + ";";
}

function getRandomColors() {
	var letters = "0987654321ABCDEF";
	var color= "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color
}

function setRandomGradient() {
	var randomColor1 = getRandomColors();
	var randomColor2 = getRandomColors();
	body.style.background = "linear-gradient(to right, "
	+randomColor1
	+", "
	+randomColor2
	+")";

	css.textContent = body.style.background + ";"; 
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);