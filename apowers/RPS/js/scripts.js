var userChoice="";

function rock(){
  userChoice = "rock";
  console.log(userChoice)
  helloworld();
}

function paper(){
  userChoice = "paper";
  console.log(userChoice)
  helloworld();
}

function scissors(){
  userChoice = "scissors";
  console.log(userChoice)
  helloworld();
}

  var helloworld = function(){
  // var userChoice = prompt("Do you choose rock, paper or scissors?");
  var computerChoice = Math.random();
  if (computerChoice < 1/3) {
    computerChoice = "rock";
  } else if (computerChoice <= 2/3) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log("Computer:" + computerChoice);  

    if (userChoice === computerChoice) {
        console.log("The result is a tie!");
        document.getElementById("displayText").innerHTML = "<p> The result is a tie. </p>";
      }

    else if (userChoice === "rock") {

        if (computerChoice === "scissors") {
            console.log("rock wins");
            document.getElementById("displayText").innerHTML = "<p> You win! </p>";}
       else {
           console.log("paper wins");
           document.getElementById("displayText").innerHTML = "<p> The computer wins. </p>";}} 

    else if (userChoice === "paper") {

        if (computerChoice === "rock") {
            console.log("paper wins");
            document.getElementById("displayText").innerHTML = "<p> You win! </p>";}
       else {
           console.log("scissors wins");
           document.getElementById("displayText").innerHTML = "<p> The computer wins. </p>";}}

    else if (userChoice === "scissors") {

        if (computerChoice === "rock") {
            console.log("rock wins");
            document.getElementById("displayText").innerHTML = "<p> The computer wins. </p>";}
       
       else {
           console.log("scissors wins");
           document.getElementById("displayText").innerHTML = "<p> You win! </p>";}}

         }

document.getElementById("rock").addEventListener("click", rock);
// document.getElementById("rock").addEventListener("click", helloworld);
document.getElementById("paper").addEventListener("click", paper);
// document.getElementById("paper").addEventListener("click", helloworld);
document.getElementById("scissors").addEventListener("click", scissors);
// document.getElementById("scissors").addEventListener("click", helloworld);

