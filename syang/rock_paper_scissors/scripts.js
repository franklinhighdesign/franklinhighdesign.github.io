
document.getElementById("rock").addEventListener("click", rock_function);

function rock_function(event) {
	event.preventDefault();
	var win_chance_rock = Math.random();
	if (win_chance_rock < 1/3 ) {
		console.log("rock wins to scissors");
		var html = "<p>The computer chooses scissors, you win!</p>";
		document.getElementById("displayText").innerHTML = html;
		win();
	} 
	else if (win_chance_rock < 2/3) {
		console.log("rock loses to paper");
		var html = "<p>The computer chooses paper, you lose.</p>";
		document.getElementById("displayText").innerHTML = html;
		lose();
	}
	else {
		console.log("rock ties to rock");
		var html = "<p>The computer also chooses rock, it's a tie.</p>";
		document.getElementById("displayText").innerHTML = html;
		tie();
	}


}


document.getElementById("paper").addEventListener("click", paper_function);

function paper_function(event) {
	event.preventDefault;
	var win_chance_paper = Math.random();
	if (win_chance_paper < 1/3 ) {
		console.log("paper wins to rock");
		var html = "<p>The computer chooses rock, you win!</p>";
		document.getElementById("displayText").innerHTML = html;
		win();
	} 
	else if (win_chance_paper < 2/3) {
		console.log("paper loses to scissors");
		var html = "<p>The computer chooses scissors, you lose.</p>";
		document.getElementById("displayText").innerHTML = html;
		lose();
	}
	else {
		console.log("paper ties to paper");
		var html = "<p>The computer also chooses paper, it's a tie.</p>";
		document.getElementById("displayText").innerHTML = html;
		tie();
	}
}


document.getElementById("scissors").addEventListener("click", scissors_function);

function scissors_function(event) {
	event.preventDefault();
	var win_chance_scissors = Math.random();
	if (win_chance_scissors < 1/3 ) {
		console.log("scissors wins to paper");
		var html = "<p>The computer chooses paper, you win!</p>";
		document.getElementById("displayText").innerHTML = html;
		win();
	} 
	else if (win_chance_scissors < 2/3) {
		console.log("scissors loses to rock");
		var html = "<p>The computer chooses rock, you lose.</p>";
		document.getElementById("displayText").innerHTML = html;
		lose();
	}
	else {
		console.log("scissors ties to scissors");
		var html = "<p>The computer also chooses scissors, it's a tie.</p>";
		document.getElementById("displayText").innerHTML = html;
		tie();
	}
}


function win(event) {
	console.log("Win count + 1")
	var initial= 0;
    initial += 1;
    document.getElementById("counter").innerHTML = wins;
    var wins = "<h1>Wins: </h1>" + initial;
}

function lose(event) {
	console.log("Lose count + 1")
}

function tie(event) {
	console.log("Tie count + 1")
}



    function click() {
    
 };

function function_name(argument) {
	// body...
}


