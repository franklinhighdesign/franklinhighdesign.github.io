
var form = document.forms.example;

form.addEventListener("click", rock_function, false);

function rock_function(event) {
	event.preventDefault();
	var win_chance_rock = Math.random();
	if (win_chance_rock < 1/3 ) {
		alert("You win!");
	} 
	else if (win_chance_rock < 2/3) {
		alert("You lose.")
	}
	else {
		alert("It's a tie!")
	}
}


form.addEventListener("paper", paper_function, false);

function paper_function(event) {
	event.preventDefault();
	var win_chance_rock = Math.random();
	if (win_chance_rock < 1/3 ) {
		alert("You win!");
	} 
	else if (win_chance_rock < 2/3) {
		alert("You lose.")
	}
	else {
		alert("It's a tie!")
	}
}


form.addEventListener("scissors", scissors_function, false);

function scissors_function(event) {
	event.preventDefault();
	var win_chance_rock = Math.random();
	if (win_chance_rock < 1/3 ) {
		alert("You win!");
	} 
	else if (win_chance_rock < 2/3) {
		alert("You lose.")
	}
	else {
		alert("It's a tie!")
	}
}
