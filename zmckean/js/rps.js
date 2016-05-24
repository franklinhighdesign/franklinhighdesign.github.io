var rps = document.forms.rps;

function rock(event) {
	event.preventDefault();
	var chanceRock = Math.random();
	
	if (chanceRock < 1/3 ) {
		var win = "<p>You Win!</p>";
		document.getElementById("result").innerHTML = win;
		addW();
	} 

	else if (chanceRock < 2/3) {
		var loose = "<p>You Loose.</p>";
		document.getElementById("result").innerHTML = loose;
		addL();
	}

	else {
		var tie = "<p>You Tied.</p>";
		document.getElementById("result").innerHTML = tie;
		addT();
	}
}

function paper(event) {
	event.preventDefault();
	var chancePaper = Math.random();

	if (chancePaper < 1/3 ) {
		var win = "<p>You Win!</p>";
		document.getElementById("result").innerHTML = win;
		addW();
	} 

	else if (chancePaper < 2/3) {
		var loose = "<p>You Loose.</p>";
		document.getElementById("result").innerHTML = loose;
		addL();
	}

	else {
		var tie = "<p>You Tied.</p>";
		document.getElementById("result").innerHTML = tie;
		addT();
	}
}

function scissors(event) {
	event.preventDefault();
	var chanceScissors = Math.random();

	if (chanceScissors < 1/3 ) {
		var win = "<p><br>You Win!</p>";
		document.getElementById("result").innerHTML = win;
		addW();
	} 

	else if (chanceScissors < 2/3) {
		var loose = "<p><br>You Loose.</p>";
		document.getElementById("result").innerHTML = loose;
		addL();
	}

	else {
		var tie = "<p><br>You Tied.</p>";
		document.getElementById("result").innerHTML = tie;
		addT();
	}
}

function addW() {
	console.log("Win")
}

function addL() {
	console.log("Loose")
}

function addT() {
	console.log("Tie")
}




rps.addEventListener("click", rock, false);
rps.addEventListener("paper", paper, false);
rps.addEventListener("scissors", scissors, false);




