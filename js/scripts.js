
var form = document.forms.practiceForm;


form.addEventListener("submit", displayPerson, false);



function displayPerson (event) {
	event.preventDefault();

	var verb1 = {
		name1: form.verb1_.value,
	};

	var verb2 = {
		name2: form.verb2_.value,
	};

	var verb3 = {
		name3: form.verb3_.value,
	};

	var verb4 = {
		name4: form.verb4_.value,
	};

	var verb5 = {
		name5: form.verb5_.value,
	};

	var verb6 = {
		name6: form.verb6_.value,
	};

	var verb7 = {
		name7: form.verb7_.value,
	};

	var verb8 = {
		name8: form.verb8_.value,
	};

	var verb2 = {
		name9: form.verb9_.value,
	};

	var html = "<p>Once upon a time, Zach " + verb1.name1 + " really slowly.  Then, he " + verb2.name2 + ".</p>";

	document.getElementById("displayText").innerHTML = html;
}



