
var form = document.forms.practiceForm;

form.addEventListener("submit", displayPerson, false);

function displayPerson (event) {
	event.preventDefault();

	var Person = {
	name: form.person.value,
	nameOther: form.personTwo.value,
	location: form.place.value,
	locationTwo: form.placeTwo.value,
	noun: form.noun.value,
	nounTwo: form.nounTwo.value,
	adj: form.adj.value,
	adverb: form.adverb.value,
	act: form.act.value,
	end: form.end.value,
	};

	var knowledge = "<br>One day " + Person.name + " decided to go to " + Person.location + ". Then they " + Person.adverb + " became very hungry, they decided to eat a " + Person.adj + " " + Person.noun + " that they found in " + Person.locationTwo + ". After visting " + Person.location + ", " + Person.name + " wanted to go " + Person.act + " with " + Person.nameOther + ". " + Person.name + " then called " + Person.nameOther + " on their mobile " + Person.nounTwo + ", then they went " + Person.act + ". Then they lived " + Person.end + " ever after.<br>";




	document.getElementById("displayText").innerHTML = knowledge
}





