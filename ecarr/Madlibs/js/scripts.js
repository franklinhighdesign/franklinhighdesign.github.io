var madlibs = document.forms.madlib;

madlibs.addEventListener("submit", displayWords, false);

function displayWords (event) {
	event.preventDefault();


var Words = {
	word1: madlibs.word1.value, //Name 1
	word2: madlibs.word2.value, //Noun 1
	word3: madlibs.word3.value,	//Verb 1
	word4: madlibs.word4.value,	//Adj. 1
	word5: madlibs.word5.value, //Name 2
	word6: madlibs.word6.value, //verb 2
	word7: madlibs.word7.value, //verb 3
};

var html = "<p>" + "One day " + Words.word1 + " was " + Words.word3 + " in the local park, when suddenly " + Words.word5 + " who looked very " + Words.word4 + "," + " came out of a " + Words.word2 + " and started " + Words.word6 + " " + Words.word1 + "." + Words.word1 + " then freaked out and started " + Words.word7 + Words.word5 + " . " + Words.word5 + " got super happy because " + Words.word1 + Words.word7 + " him. " + "</p>";

document.getElementById("displayText").innerHTML = html;

};