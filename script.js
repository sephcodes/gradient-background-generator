var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizeBtn = document.getElementById("randomize");
var flipBtn = document.getElementById("flip");
var direction = "horizontal";

// input listens every time input changes

function setGradient (direction) {
	if (direction === "horizontal") {
		body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
		css.textContent = body.style.background + ";";
	} else {
		body.style.background = "linear-gradient(to bottom, " + color1.value + ", " + color2.value + ")";
		css.textContent = body.style.background + ";";
	}
}

function randomize () {
	//random hex generator courtesy of https://www.paulirish.com/2009/random-hex-color-code-snippets/
	color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
	setGradient(direction);
}

function flip () {
	if (direction === "horizontal") {
		setGradient("vertical");
		direction = "vertical";
	} else {
		setGradient("horizontal");;
		direction = "horizontal";
	}
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomizeBtn.addEventListener("click", randomize);

flipBtn.addEventListener("click", flip);

