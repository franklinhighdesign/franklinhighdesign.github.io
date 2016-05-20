console.log("Loops");

function forLoop () {
	console.log("forLoop running");
	for (var i = 0; i < 5; i++) {
		var favClass = prompt("What is your favorite class?");
		document.getElementById('forLoopResponse').innerHTML += favClass + "<br>";
		console.log(i);
	};
}

forLoopButton.addEventListener('click',forLoop);



console.log("Loops");

function whileLoop () {
	var j = 0;
	while (j < 5){
		console.log("whileLoopIsRunning");
		var leastClass = prompt("What is your least favorite class?");
		document.getElementById('whileLoopResponse').innerHTML += leastClass + "<br>";
		j++;
				}
	}



whileLoopButton.addEventListener('click',whileLoop);										


























