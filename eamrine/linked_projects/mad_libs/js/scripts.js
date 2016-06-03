var form = document.forms.mainForm;

form.addEventListener("submit", displayPerson, false); 

function displayPerson (event) {
	event.preventDefault();

	var Story = {

	day: form.weekDay.value,
	name: form.givenName.value,
	restaurant: form.restaurant.value,
	adjective1: form.adj1.value,
	noun1: form.noun1.value,
	action1: form.action1.value,
	number: form.number.value,
	timeUnit: form.timeUnit.value,
	bodyPart: form.bodyPart.value,
	object: form.object.value,
	emotion: form.emotion.value,
	number2: form.number2.value,
	object2: form.object2.value,
	disease: form.disease.value,
	verb: form.verb.value,

	
};

	var html = "<p>On a fine " + Story.day + " evening " + Story.name + " found a " + Story.adjective1 + " " + Story.noun1 + ". The " + Story.adjective1 + " " + Story.noun1 + " disturbed " + Story.name + " so much that they went out to " + Story.restaurant + " and " + Story.action1 + " for " + Story.number + " " + Story.timeUnit + ". The " + Story.restaurant + " manager got super upset, however, and hit " + Story.name + " in the " + Story.bodyPart + " with a " + Story.object + ". The damage to " + Story.name + "'s " + Story.bodyPart + " caused him to feel great amounts of " + Story.emotion + ". " + Story.name + " vowed never to visit " + Story.restaurant + " again, and swore vengeance upon the place. In " + Story.number2 + " years " + Story.name + " began a campaign to destroy every single " + Story.restaurant + " in existence with a " + Story.object2 + ". The work put a toll on " + Story.name + "'s body and they acquired " + Story.disease + ". " + Story.disease + " caused " + Story.name + " to " + Story.verb + " uncontrollably and " + Story.name + " died. The end." ;

	document.getElementById("storyText").innerHTML = html;

};






