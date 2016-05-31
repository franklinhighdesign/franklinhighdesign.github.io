var form = document.forms.Libmad;

form.addEventListener("submit", displayForm);

function displayForm(event) {

	event.preventDefault();

	var Things = {
		Adjective1: form.AdjOne.value,
		Verb1: form.VerbOne.value,
		Object1: form.ObjOne.value,
		Verb2: form.VerbTwo.value,
		Name: form.NameUser.value,
		Animal: form.AniName.value,
		Yell: form.Yelling.value,
		Emotion: form.EmoOne.value,
	};

	var words = "<h4>Chapter 1: The warrior walked into the " + Things.Adjective1 + " cave. The warrior " + Things.Verb1 + "'s into the dark and ventures forward. It was " + Things.Verb2 + " and scary but the " + Things.Name + " warrior was not feared of the cave. " + Things.Animal + " bones were scattered all around the cave floors, so the warrior shouted " + Things.Yell + "!, but there was no answer. He/she pulled out the " + Things.Object1 + ". It gleamed with " + Things.Emotion + " power. The " + Things.Name + " moved further into the " + Things.Adjective1 + " cave.</h4>";

document.getElementById("displayText").innerHTML = words;
}