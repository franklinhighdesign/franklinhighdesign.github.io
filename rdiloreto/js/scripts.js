var form = document.forms.Madlib;

form.addEventListener("submit", displayForm);

function displayForm(event) {

	event.preventDefault();

	var Things = {
		Adjective1: form.AdjOne.value,
		Size1: form.SizeOne.value,
		BuildingType1: form.BuildingOne.value,
		Number1: form.NumOne.value,
		Object1: form.ObjOne.value,
		Job1: form.JobOne.value,
		Title1: form.TitleOne.value,
		};

	var words = "<p>As Delphine walked through the village of " + Things.Adjective1 + " roofs on clay houses all the doors were shut to keep as much heat out of the huts.  Delphine walked into the " + Things.Size1 + " of the houses.  This was the temple.  It held all the gear that was already made and had a forge to make custom gear for the trials.  What most people didn't know is that Delphine found a hidden " + Things.BuildingType1 +" out in the woods about " + Things.Number1 + " miles away.  Every day she would walk to the shack and learn about enchanting and stealth.  A man lived in the small shack but it was full of books and every time Delphine went over to his house he was never there so she snuck in and read his books then went back to the village. One day when Delph snuck into the house she saw something she had never noticed before, there was a trap door under the " + Things.Object1 + ".  So she found a lockpick and opened the door. Under the house was a massive library full of books on warriors thieves and " + Things.Job1 + ".  The first book she picked up was about a warrior who went by the name of the " + Things.Title1 + " Knight because his armor was made out of a rare mineral called " + Things.Title1 + " which when smelted down was black as the night.  As she explored the library she found an altar that had a weird rune pattern on it.  She had read about these tables and she knew what they were for.</p>";

	document.getElementById("displayText").innerHTML = words;

}