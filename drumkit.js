var numberOfButtons =
	document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
.addEventListener("click", function() {

	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}

document.addEventListener("keypress", function(event) {
sound(event.key);
animation(event.key);
});

function sound(key) {
switch (key) {
	case "A":
	var sound1 = new Audio("music/A.wav");
	sound1.play();
	break;

	case "S":
	var sound2 = new Audio("music/S.wav");
	sound2.play();
	break;

	case "D":
	var sound3 = new Audio('music/D.wav');
	sound3.play();
	break;

	case "F":
	var sound4 = new Audio('music/F.wav');
	sound4.play();
	break;

	case "G":
	var sound5 = new Audio('music/G.wav');
	sound5.play();
	break;

	case "H":
	var sound6 = new Audio('music/H.wav');
	sound6.play();
	break;

	case "J":
	var sound7 = new Audio('music/J.wav');
	sound7.play();
	break;

	default: console.log(key);
}
}

function animation(currentKey) {
var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("animation");

setTimeout(function() {
	activeButton.classList.remove("animation");
}, 100);
}
