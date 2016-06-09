console.log("js good");

var userChoice = "";
var compChoice = "";

p1rock.addEventListener('click', playerRock);
p1paper.addEventListener('click', playerPaper);
p1scissors.addEventListener('click', playerScissors);


function playerRock() {
	console.log("rock has been chosen");
	userChoice = "rock";
	document.getElementById("userResultPicture").src = "http://cdn1us.denofgeek.com/sites/denofgeekus/files/therock.jpg";
	document.getElementById("userResultText").innerHTML = "<h3>You picked: Rock</h3>"
	computerPicker();
}


function playerPaper() {
	console.log("paper has been chosen");
	userChoice = "paper";
	document.getElementById("userResultPicture").src = "http://adsymposium.org/images/pileofpapers.jpg";
	document.getElementById("userResultText").innerHTML = "<h3>You picked: Paper</h3>"
	computerPicker();
}


function playerScissors() {
	console.log("scissors have been chosen");
	userChoice = "scissors";
	document.getElementById("userResultPicture").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/2000px-Scissors_icon_black.svg.png";
	document.getElementById("userResultText").innerHTML = "<h3>You picked: Scissors</h3>"
	computerPicker();
}


function computerPicker() {
	compChoice = Math.random();
	console.log(compChoice);

	if(compChoice <= .333333) {
		compChoice = "rock";
		console.log("the computer picks rock");
		document.getElementById("computerResultPicture").src = "http://cdn1us.denofgeek.com/sites/denofgeekus/files/therock.jpg";
		document.getElementById("computerResultText").innerHTML = "<h3>Computer picked: Rock</h3>"
		compare();
	}

	else if(compChoice <= .666666) {
		compChoice = "paper";
		console.log("the computer picks paper");
		document.getElementById("computerResultPicture").src = "http://adsymposium.org/images/pileofpapers.jpg";
		document.getElementById("computerResultText").innerHTML = "<h3>Computer picked: Paper</h3>"
		compare();
	}

	else {
		compChoice = "scissors";
		console.log("the computer picks scissors");
		document.getElementById("computerResultPicture").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/2000px-Scissors_icon_black.svg.png";
		document.getElementById("computerResultText").innerHTML = "<h3>Computer picked: Scissors</h3>"
		compare();
	}




}



function compare() {
	if(userChoice === compChoice) {
		console.log("the result is a tie");
		if(userChoice === "rock") {
			document.getElementById("winResultPicture").src = "http://cdn1us.denofgeek.com/sites/denofgeekus/files/therock.jpg";
		}
		else if(userChoice === "scissors") {
			document.getElementById("winResultPicture").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/2000px-Scissors_icon_black.svg.png";
		}
		else if(userChoice === "paper"){
			document.getElementById("winResultPicture").src = "http://adsymposium.org/images/pileofpapers.jpg";
		}
		
		document.getElementById("winResultText").innerHTML = "<h2>It's a tie!</h2>"
	}

	else if(userChoice === "rock" && compChoice === "paper") {
		console.log("computer picks paper and beats user's rock");
		document.getElementById("winResultPicture").src = "http://adsymposium.org/images/pileofpapers.jpg";
		document.getElementById("winResultText").innerHTML = "<h2>Computer Wins!</h2>"
	}

	else if(userChoice === "rock" && compChoice === "scissors") {
		console.log("computer chooses scissors and looses to user's rock");
		document.getElementById("winResultPicture").src = "http://cdn1us.denofgeek.com/sites/denofgeekus/files/therock.jpg";
		document.getElementById("winResultText").innerHTML = "<h2>You Win!</h2>"
	}

	else if(userChoice === "paper" && compChoice === "rock") {
		console.log("Computer chooses rock and loses to paper. User wins");
		document.getElementById("winResultPicture").src = "http://adsymposium.org/images/pileofpapers.jpg";
		document.getElementById("winResultText").innerHTML = "<h2>You Win!</h2>"
	}

	else if(userChoice === "paper" && compChoice === "scissors") {
		console.log("computer chooses scissors and beats the user's paper");
		document.getElementById("winResultPicture").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/2000px-Scissors_icon_black.svg.png";
		document.getElementById("winResultText").innerHTML = "<h2>Computer Wins!</h2>"
	}

	else if(userChoice === "scissors" && compChoice === "rock") {
		console.log("computer chooses rock and beats user's scissors");
		document.getElementById("winResultPicture").src = "http://cdn1us.denofgeek.com/sites/denofgeekus/files/therock.jpg";
		document.getElementById("winResultText").innerHTML = "<h2>Computer Wins!</h2>"
	}

	else if(userChoice === "scissors" && compChoice === "paper") {
		console.log("user chooses scissors and cuts computer's paper");
		document.getElementById("winResultPicture").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/2000px-Scissors_icon_black.svg.png";
		document.getElementById("winResultText").innerHTML = "<h2>You Win!</h2>"
	}
}










