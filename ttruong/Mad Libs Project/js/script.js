var form = document.forms.madLibs;



form.addEventListener("submit", displayPerson, false);

function displayPerson(event) {
	event.preventDefault();




	var text = {
		
		firstBox: form.person1.value,
		secondBox: form.verb1.value,
		thirdBox: form.verb2.value,
		fourBox: form.noun1.value,
		fiveBox: form.adjective1.value,
		sixBox: form.noun2.value,
		sevenBox: form.noun3.value,
		eightBox: form.adjective2.value,
		nineBox: form.location1.value,	
		tenBox: form.person2.value,
		elevenBox: form.adverb1.value,
		twelveBox: form.noun4.value,
		thirteenBox: form.adjective3.value,
		fourteenBox: form.number1.value,
		fifteenBox: form.verb3.value,
		sixteenBox: form.city1.value,
		seventeenBox: form.person3.value,
		eighteenBox: form.noun5.value,
		nineteenBox: form.noun6.value,
		twentyBox: form.noun7.value,
		twentyoneBox: form.verb4.value,
		twentytwoBox: form.person4.value,
		twentythreeBox: form.adjective4.value,
		twentyfourBox: form.verb5.value,
		twentyfiveBox: form.person5.value,
		twentysixBox: form.noun8.value,
		twentysevenBox: form.noun9.value,


	};


	var fillerOne = "<p>" + text.firstBox + " has been " + text.secondBox + " and " + text.thirdBox + " , but she refuse to be a passive" + text.fourBox + ". She will never stop fighting the " + text.fourBox + " man who's keeping her " + text.sixBox + ". And she will never give up " + text.sevenBox + ".</p>";

	var fillerTwo = "<p> When the " + text.eightBox + " attorney was snatched from her " + text.nineBox + ", her" + text.tenBox + " was " + text.elevenBox + " shot to death with the same " + text.twelveBox + " used a(n) " + text.thirteenBox + " woman two days earlier. Since then, " + text.fourteenBox + " more victims have been " + text.fifteenBox + " with the same weapon. Now " + text.sixteenBox + "homicide detective" + text.seventeenBox + " must somehow stop an elusive " + text.eighteenBox + " with few " + text.nineteenBox + "to work on, and no idea where the " + text.twentyBox + " will strike next. Until he can " + text.twentyoneBox + " him," + text.twentytwoBox + " will be left to struggle against " + text.twentythreeBox + " odds, " + text.twentyfourBox + " desperately to survive long enough to see her " + text.twentyfiveBox + text.twentysixBox + " bought to " + text.twentysevenBox + ".</p>";



	document.getElementById("paragraph").innerHTML = fillerOne;
	document.getElementById("paragraph1").innerHTML = fillerTwo;

	




}

