var form = document.forms.practiceForm;

form.addEventListener("submit", displayPerson, false); 

function displayPerson (event) {
  event.preventDefault();

  var Person = {

  name: form.username.value,
  age: form.userage.value,
  name2: form.username2.value,
  sex: form.usersex.value,
  memory: form.usermemory.value,
  nightmare: form.usernightmare.value,
};

  var words = "<p> The only remaining member of his family  " + Person.name + " lost at the age of " + Person.age + " tooken captive by " + Person.name2 + " the last thing that he/she remembers " + Person.sex +  Person.memory  + " is their worst nightmare " + Person.nightmare +" they enter into the pit of great sorrow you weep  ,  tears roll down their face then they scream it was just a dream ." + "</p>"; 

  document.getElementById("displayText").innerHTML = words;

};

  


  





















