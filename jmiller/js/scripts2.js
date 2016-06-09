console.log("it is linked");


var userChoice = "";
var compChoice = "";



p1rock.addEventListener('click',playerRock);
p1paper.addEventListener('click',playerPaper);
p1scissors.addEventListener('click',playerScissors);


function playerRock() {
	console.log("Rock has been chosen by the user");
	userChoice = "rock";
	computerpicker();
}

function playerPaper() {
	console.log("paper has been chosen by the user");
	userChoice = "paper";
	computerpicker();
}

function playerScissors() {
	console.log("scissors has been chosen by the user");
	userChoice = "scissors";
	computerpicker();
}


function computerpicker() {
	compChoice=Math.random();

	console.log(compChoice);



if  (compChoice <=.33333333) {

	compChoice= "rock";
	console.log("The computer picks rock");
	compare();

}

else if (compChoice<=.6666666) {

	compChoice="paper";
	console.log("The computer picks paper");
	compare();
}


else {

	compChoice= "scissors";
	console.log("computer chose scissors wins")
	compare();

}

}

function compare () {
	if(userChoice === compChoice){ 

		console.log( "it is a tie");
		document.getElementById('result').innerHTML = "The result is a tie!";

	}
	
	
	else if(userChoice === "rock" && compChoice === "paper"){
		
		console.log("computer chose paper. Paper beats rock");
		document.getElementById("result").innerHTML = "Result computer chose paper, paper beats rock";
	}	
                                                                                                                                                                                                                                                                                

	else if(userChoice === "rock" && compChoice === "scissors"){
		console.log("computer chose scissors. computer loses");
		document.getElementById("result").innerHTML = "Result computer chose scissors, computer loses";
	}

	else if(userChoice === "paper" && compChoice === "scissors"){
		console.log("computer chose scissors. computer wins");
		document.getElementById("result").innerHTML = "Result computer chose scissors,computer wins";
	}

	else if(userChoice === "paper" && compChoice === "rock"){
		console.log("computer chose rock. computer loses");
		document.getElementById("result").innerHTML = "Result computer chose rock,computer loses";
	}

	else if(userChoice === "scissors" && compChoice === "rock"){
		console.log("computer chose rock. computer wins");
		document.getElementById("result").innerHTML = "Result computer chose rock, computer wins";
	}

	else if(userChoice === "scissors" && compChoice === "paper"){
		console.log("computer chose rock. computer loses");
		document.getElementById("result").innerHTML = "Result computer chose paper,computer loses";
	}

	}


