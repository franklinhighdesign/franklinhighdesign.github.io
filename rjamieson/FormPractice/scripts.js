var form = document.forms.practiceForm;

form.addEventListener("submit", displayPerson, false); 

function displayPerson (event) {
	event.preventDefault();

	var Person = {

	name: form.username.value,
	
};

	var html = "<p>You typed:" + Person.name + ".  </p>";

	document.getElementById("displayText").innerHTML = html;

};




