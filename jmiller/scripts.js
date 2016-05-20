var form = document.forms.practiceForm;

form.addEventListener("submit", displayPerson, false); 

function displayPerson (event) {
  event.preventDefault();

  var Person = {

  name: form.username.value,
  age: form.userage.value,
  name: form.username.value,
  sex: form.username.value,
};

  var words = "<p> The last survivor" + Person.name + "lost at the age of" + Person.age + "tooken captive by"
  + Person.name + "the last thing that he/she remembers"                 "</p>";

  document.getElementById("displayText").innerHTML = words;

};

  



  





















