console.log("It is linked");

plrock.addEventListener('click', playerRock);
plpaper.addEventListener('click', playerPaper);
plscissors.addEventListener('click', playerScissors);

var userChoice = "";

var compChoice = "";


function playerRock() {
	document.getElementById("result1").innerHTML = ("Rock has been chosen by the user")
	userChoice = "rock";
	computerPicker();
}

function playerPaper() {
	document.getElementById("result1").innerHTML = ("Paper has been chosen by the user");
	userChoice = "paper";
	computerPicker();
}

function playerScissors() {
	document.getElementById("result1").innerHTML = ("Scissors has been chosen by the user");
	userChoice = "scissors";
	computerPicker();
}


function computerPicker() {
	compChoice = Math.random();
	console.log(compChoice);

	if(compChoice <= .333333) {

		compChoice = "rock";
		document.getElementById("result2").innerHTML = ("The computer pickes rock");
		compare();
	}

	else if (compChoice <= .666666) {
		
		compChoice = "paper";
		document.getElementById("result2").innerHTML = ("The computer pickes paper");
		compare();
	}

	else {
		
		compChoice = "scissors";
		document.getElementById("result2").innerHTML = ("The computer pickes scissors");
		compare();
	}

}

function compare() {

	if (userChoice === compChoice) {
		document.getElementById("result3").innerHTML = ("The result is a tie");
	}

	else if (userChoice === "rock" && compChoice === "paper") {
		document.getElementById("result3").innerHTML = ("Computer chooses scissors, and beats rock!");
	}

	else if (userChoice === "rock" && compChoice === "scissors") {
		document.getElementById("result3").innerHTML = ("Computer chooses scissors and loses to rock!");
	}

	else if (userChoice === "paper" && compChoice === "rock") {
		document.getElementById("result3").innerHTML = ("Computer chooses rock and loses to paper. You WIN!");
	}

	else if (userChoice === "paper" && compChoice === "scissors") {
		document.getElementById("result3").innerHTML = ("Computer chooses scissors and cuts paper. Computer Wins!");
	}

	else if (userChoice === "scissors" && compChoice === "rock") {
		document.getElementById("result3").innerHTML = ("Computer chooses rock and smashes scissors. Computer Wins!");
	} 

	else if (userChoice === "scissors" && compChoice === "paper") {
		document.getElementById("result3").innerHTML = ("Computer chooses paper and gets cut by scissors. You Win!");
	}




}