//Exercise Sheet 1
//part 1
function nameQuestion() {
	var my_array = [prompt('What is your first name?'), prompt('What is your middle initial?'), prompt('What is your last name?')];
	console.log(my_array);
	document.getElementById('namePerogative').innerHTML = 'Your name is ' + my_array[2] + ", " + my_array[0] + ", " + my_array[1] + '. It could also be ' + my_array[0] + " " + my_array[1] + ", " + my_array[2] + ".";
}

my_var.addEventListener('click', nameQuestion);

//part 2
//addition
function addition() {
	var x = Number(prompt('Choose one number'));
	var y = Number(prompt('Choose another number'));
	var a = x + y;
	console.log(a);
	document.getElementById('add').innerHTML = "The sum of " + x + " and " + y + " is " + a + ".";
}

add.addEventListener('click', addition);

//part 3
//subtraction
function subtraction() {
	var x = Number(prompt('Choose one number'));
	var y = Number(prompt('Choose another number'));
	var a = x - y;
	console.log(a);
	document.getElementById('subtract').innerHTML = "The difference of " + x + " and " + y + " is " + a + ".";
}

subtract.addEventListener('click', subtraction);

//multiplication
function multiplication() {
	var x = Number(prompt('Choose one number'));
	var y = Number(prompt('Choose another number'));
	var a = x * y;
	console.log(a);
	document.getElementById('multiply').innerHTML = "The product of " + x + " and " + y + " is " + a + ".";
}

multiply.addEventListener('click', multiplication);

//division
function division() {
	var x = Number(prompt('Choose one number'));
	var y = Number(prompt('Choose another number'));
	var a = x / y;
	console.log(a);
	document.getElementById('divide').innerHTML = "The quotient of " + x + " and " + y + " is " + a + ".";
}

divide.addEventListener('click', division);

//part 4
function nameAsk() {
	console.log("JS is good");
	var x = prompt("What is your first name?");
	var y = prompt("What is your shoe size?");
	var l = x.length;
	console.log(l);
	var a = y * l;
	console.log(a);
	document.getElementById('nameClick').innerHTML = "Your lucky number is " + a + "!"
}

nameClick.addEventListener('click', nameAsk);

//part 5
function rectangleCalc() {
	console.log("JS is good");
	alert("I can determine the area and perimeter of your rectangle.");
	var length = Number(prompt("Give me the length of one side of your rectangle in inches."));
	var height = Number(prompt("Give me the length of another side of your rectangle in inches."));
	var area = length * height;
	console.log(area);
	var perim = (2*(length + height));
	console.log(perim);
	document.getElementById('rectangeleInt').innerHTML = "Your rectangle's area is " + area + " inches squared. Your rectangle's perimeter is " + perim + " inches.";
}

rectangeleInt.addEventListener('click', rectangleCalc);

//Exercise Sheet 2
//part 1
function mathGame() {
	console.log('JS is good!');
	while (answer != 5) {
		var answer = prompt("What is the sum of 2 and 3?");
		console.log(answer);
		if (answer ==5) {
			document.getElementById("mathProb").innerHTML = "Congratulations! You are correct!";
		}
		else {
			alert("I'm sorry, please try again.");
		}
	}
}

mathProb.addEventListener('click', mathGame);

function mathGame2() {
	console.log('JS is good!');
	while (answer != x + y) {
		var x = Math.floor((Math.random() * 10) + 1);
		console.log(x);
		var y = Math.floor((Math.random() * 10) + 1);		
		console.log(y);
		var answer = prompt("What is the sum of " + x + " and " + y + "?");
		console.log(answer);
		if (answer == x + y) {
			document.getElementById("mathProb2").innerHTML = "Congratulations! You are correct!";
		}
		else {
			alert("I'm sorry, please try again.");
		}
	}
}

mathProb2.addEventListener('click', mathGame2);

function mathTest(){
	for (i=0; i<5; i++) {
		numChoose();
	}
	var finish = prompt("Do you want to play again?");
	if (finish === "yes") {
		alert("Okay! Let's play!");
		mathTest();
	}
	else {
		alert("yes was not entered. Game shutting down.");
		alert("jerk...");
	}
}

function numChoose() {
	var x = Math.floor((Math.random() * 10) + 1);
	var y = Math.floor((Math.random() * 10) + 1);
	var answer = prompt("What is the sum of " + x + " and " + y + "?");
	if (answer != x + y) {
		while (answer != x + y) {
			var answer = prompt("What is the sum of " + x + " and " + y + "?");
		}
	}
	else {
		alert("Good job!");
	}
}

mathQuiz.addEventListener('click', mathTest);

function guessGame() {
	var comQuestion = Number(prompt("Pick a number that is greater than or equal to zero, and equal to or less than 10."));
	var firstGuess = Math.floor((Math.random() * 10) + 1);
	var comGuess = prompt("Is your number equal to, higher than, or less than " + firstGuess + "? Enter e for equal, h for higher, or l for lower. Continue to use these inputs for the entire game.");
	
	if (comGuess == "e") {
		end();
	}
	
	if (comGuess == "h") {
		var highGuessOne = firstGuess + 1;
		var guessHigher = prompt("Is your number  " + highGuessOne + "?");
		if (guessHigher == "e") {
			end();
		}
	}
/*		if (guessHigher == "h") {
			var highGuessTwo = firstGuess - 2;
			var guesshigherTwo = prompt("Is your number equal to, higher than, or less than " + highGuessTwo + "?");
		}
		if (guesshigherTwo == "e") {
			end();
*/		
	
	if (comGuess == "l") {
		var lowGuessOne = firstGuess - 1;
		var guesslower = prompt("Is your number " + lowGuessOne + "?");
		if (guessLower == "e") {
			end();
		}
	}
}
/*		if (guessLower == "l") {
			var lowGuessTwo = firstGuess - 2;
			var guesslowerTwo = prompt("Is your number equal to, higher than, or less than " + lowGuessTwo + "?");
		}
		if (guesslowerTwo == "e") {
			end();
*/		

function end() {
	alert("Booyashaka! Game over!");
}

guessBut.addEventListener('click', guessGame);




