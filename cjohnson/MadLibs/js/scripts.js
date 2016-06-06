var form = document.forms.practiceForm;

form.addEventListener("submit", displayPerson, false); 

function displayPerson (event) {
	event.preventDefault();

	var Person = {

	name1: form.username1.value,
	name2: form.username2.value,
	adj1: form.useradj1.value,
	adj2: form.useradj2.value,
	adj3: form.useradj3.value,
	verb1: form.userverb1.value,
	verb2: form.userverb2.value,
	verbed: form.userverbed.value,
	verbly: form.useradjly.value,
	sport: form.usersport.value,
	desk: form.userdesk.value,
}

	var words = "<p>Your Mad Lib: Once upon a time there was a " + Person.adj1 + " man named " + Person.name1 + ". He had a " + Person.adj2 + " temper that he couldn't control. One time he got so " + Person.adj2 + " he was " + Person.verb1 + " off his " + Person.sport + " team. " + Person.name2 + " was on the rival " + Person.sport + " team. They got in a " + Person.verb2 + " once and it ended " + Person.desk + ". But during the " + Person.sport + " season, " + Person.verb2 + " is not okay so they both got " + Person.verbed + ". It was a " + Person.adj3 + " season, but " + Person.name1 + " won the " + Person.verb2 + ".</p>";

	document.getElementById("displayText").innerHTML = words;

};
