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





}