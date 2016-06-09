
document.getElementById("rock").addEventListener("click", rock_function);

function rock_function(event) {
	event.preventDefault();
	var win_chance_rock = Math.random();
	if (win_chance_rock < 1/3 ) {
		console.log("rock wins to scissors");
		var html = "<h2>The computer chooses scissors, you win!</h2>";
		document.getElementById("displayText").innerHTML = html;
		win();
	} 
	else if (win_chance_rock < 2/3) {
		console.log("rock loses to paper");
		var html = "<h2>The computer chooses paper, you lose.</h2>";
		document.getElementById("displayText").innerHTML = html;
		lose();
	}
	else {
		console.log("rock ties to rock");
		var html = "<h2>The computer also chooses rock, it's a tie.</h2>";
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
		var html = "<h2>The computer chooses rock, you win!</h2>";
		document.getElementById("displayText").innerHTML = html;
		win();
	} 
	else if (win_chance_paper < 2/3) {
		console.log("paper loses to scissors");
		var html = "<h2>The computer chooses scissors, you lose.</h2>";
		document.getElementById("displayText").innerHTML = html;
		lose();
	}
	else {
		console.log("paper ties to paper");
		var html = "<h2>The computer also chooses paper, it's a tie.</h2>";
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
		var html = "<h2>The computer chooses paper, you win!</h2>";
		document.getElementById("displayText").innerHTML = html;
		win();
	} 
	else if (win_chance_scissors < 2/3) {
		console.log("scissors loses to rock");
		var html = "<h2>The computer chooses rock, you lose.</h2>";
		document.getElementById("displayText").innerHTML = html;
		lose();
	}
	else {
		console.log("scissors ties to scissors");
		var html = "<h2>The computer also chooses scissors, it's a tie.</h2>";
		document.getElementById("displayText").innerHTML = html;
		tie();
	}
}
// RESULT COUNTERS
var initial = 0;
function win(event) {
	console.log("Win count + 1");
    initial += 1;
    var wins = "<h3>Wins: </h3>" + initial;
    document.getElementById("counter_win").innerHTML = wins;
}

var initial_loss = 0;
function lose(event) {
	console.log("Lose count + 1")
	initial_loss += 1;
    var wins = "<h3>Losses: </h3>" + initial_loss;
    document.getElementById("counter_loss").innerHTML = wins;
}

var initial_tie = 0;
function tie(event) {
	console.log("Tie count + 1")
	initial_tie += 1;
    var wins = "<h3>Ties: </h3>" + initial_tie;
    document.getElementById("counter_tie").innerHTML = wins;
}



    function click() {
    
 };

function function_name(argument) {
	// body...
}


