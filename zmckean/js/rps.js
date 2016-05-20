var rps = document.forms.rps;

function rock(event) {
	event.preventDefault();
	var chanceRock = Math.random();
	
	if (chanceRock < 1/3 ) {
		alert("You win!");
	} 

	else if (chanceRock < 2/3) {
		alert("You lose.")
	}

	else {
		alert("Tie.")
	}
}

function paper(event) {
	event.preventDefault();
	var chancePaper = Math.random();

	if (chancePaper < 1/3 ) {
		alert("You win!");
	} 

	else if (chancePaper < 2/3) {
		alert("You lose.")
	}

	else {
		alert("Tie.")
	}
}

function scissors(event) {
	event.preventDefault();
	var chanceScissors = Math.random();

	if (chanceScissors < 1/3 ) {
		alert("You win!");
	} 

	else if (chanceScissors < 2/3) {
		alert("You lose.")
	}

	else {
		alert("Tie.")
	}
}

rps.addEventListener("click", rock, false);
rps.addEventListener("paper", paper, false);
rps.addEventListener("scissors", scissors, false);




