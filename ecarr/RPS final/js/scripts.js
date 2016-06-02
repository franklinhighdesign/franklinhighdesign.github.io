var userChoice ="";
var comChoice ="";


p1rock.addEventListener("click", playerRock)
p1paper.addEventListener("click", playerPaper)
p1scissors.addEventListener("click", playerScissors)



function playerRock () {
	console.log("Rock has been chosen by player.")
	userChoice = "rock";
	computerPicker();
};

function playerPaper () {
	console.log("Paper has been chosen by player.")
	userChoice = "paper";
	computerPicker();
};

function playerScissors () {
	console.log("Scissors has been chosen by player.")
	userChoice = "scissors";
	computerPicker();
};


function computerPicker (){
	comChoice = Math.random();
	console.log(comChoice);

	if(comChoice <= .333333) {
		comChoice="rock";
		console.log("The computer has picked rock");
		compare();
	}

	else if (comChoice <= .666666) {
		comChoice = "paper";
		console.log("The computer has picked paper");
		compare();
	}

	else {
		comChoice = "scissors";
		console.log("The computer has picked scissors");
		compare();
	}

};


function compare () {
	if (userChoice === comChoice) {
		var html = "<p>" + "<h2>" + "The winner is:" + " No one! It was a tie! " + "</h2>" + "</p>"
		document.getElementById("displayText").innerHTML = html;
		console.log("The result is a tie!");
		//Tie
	}


	else if(userChoice === "scissors" && comChoice === "paper") {
		var html = "<p>" + "<h2>" + "The winner is:" + " You're winner! By choosing scissors and cutting its paper!" + "</h2>" + "</p>"
		document.getElementById("displayText").innerHTML = html;
		console.log("The Computer chose rock, and won!");
		//Player wins
	}


	else if(userChoice === "rock" && comChoice === "scissors") {
		var html = "<p>" + "<h2>" + "The winner is:" + " You're winner! By choosing rock and crushing its scissors!" + "</h2>" + "</p>"
		document.getElementById("displayText").innerHTML = html;
		console.log("Computer chose scissors, and lost!");
		//Player wins
	}


	else if(userChoice === "paper" && comChoice === "rock") {
		var html = "<p>" + "<h2>" + "The winner is:" + " You're winner! By choosing paper and covering its rock!" + "</h2>" + "</p>"	
		document.getElementById("displayText").innerHTML = html;
		console.log("The Computer chose rock, and lost!");
		//Player wins
	}


	else if(userChoice === "paper" && comChoice === "scissors") {
		var html = "<p>" + "<h2>" + "The winner is:" + " The computer! By choosing scissors and cutting your paper!" + "</h2>" + "</p>"
		document.getElementById("displayText").innerHTML = html;
		console.log("The Computer chose scissors, and won!");
		//Computer wins
	}


	else if(userChoice === "scissors" && comChoice === "rock") {
		var html = "<p>" + "<h2>" + "The winner is:" + " The computer! By choosing rock and crushing your scissors!" + "</h2>" + "</p>"
		document.getElementById("displayText").innerHTML = html;
		console.log("The Computer chose rock, and won!");
		//Computer wins
	}


	else if(userChoice === "rock" && comChoice === "paper") {
		var html = "<p>" + "<h2>" + "The winner is:" + " The computer! By choosing paper and covering your rock!" + "</h2>" + "</p>"
		document.getElementById("displayText").innerHTML = html;
		console.log("Computer chose paper, and beats rock!");
		//Computer wins
	}

};
