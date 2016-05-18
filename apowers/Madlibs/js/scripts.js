var form = document.forms.Madlibs;

form.addEventListener("submit", MadLib, false); 

function MadLib (event) {
	
	event.preventDefault();

	var Words = {
	word1: form.one.value,
	word2: form.two.value,
	word3: form.three.value,
	word4: form.four.value,
	word5: form.five.value,
	word6: form.six.value,
	word7: form.seven.value,
	word8: form.eight.value,
	word9: form.nine.value,
	word10: form.ten.value};

	// var output1 = "<p>EXAMPLE:" + " " + Words.word1 + " " + Words.word2 + " " + Words.word3 + " " + Words.word4 + " " + Words.word5 + " " + Words.word6 + " " + Words.word7 + " " + Words.word8 + " " + Words.word9 + " " + Words.word10 + ".  </p>";

	var output1 = "<p>One fine summer day" + " " + Words.word1 + " " + "and" + " " + Words.word2 + " " + "wanted to have some fun. First they tried" + " " + Words.word3 + "," + " but that didn't 	go so well so then they tried" + " " + Words.word4 + "." + " They enjoyed that a lot more, and did that for about" + " " + Words.word5 + " " + "hours. After that they got bored and tried"+ " " + Words.word6 + "."+ " " + Words.word1 + " " + "wasn't very good at" + " " + Words.word6 + " " + "though, and was hurt." + " " + Words.word2 + " " + "called" + " " + Words.word7 + " " + "and together they rushed" + " " + Words.word1 + " " + "to the hospital. Unfortunately for them," + " " + Words.word8 + " " + "was there, and in his best Robert Liston impression, killed all three of them along with" + " " + Words.word9 + " " + "other people. It was very" + " " + Words.word10 + ".</p>"; 


	document.getElementById("outputBox1").innerHTML = output1;
}



