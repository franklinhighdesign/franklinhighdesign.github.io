/*! Main */
jQuery(document).ready(function($) {
  
    // Fixa navbar ao ultrapassa-lo
    var navbar = $('#navbar-main'),
    		distance = navbar.offset().top,
        $window = $(window);

    $window.scroll(function() {
        if ($window.scrollTop() >= distance) {
            navbar.removeClass('navbar-fixed-top').addClass('navbar-fixed-top');
          	$("body").css("padding-top", "70px");
        } else {
            navbar.removeClass('navbar-fixed-top');
            $("body").css("padding-top", "0px");
        }
    });
});


console.log("so far things are working");

/************************** Initialize the variables for the game  ********/

// var rock = "rock"; //  Rock is set as the value 1
// var paper = "paper"; // Paper is set as the value 2
// var scissors = "scissors"; // Scissors is set as the value 3

/*********************************** Code for player 1  ***************/

var rockP1 = document.getElementById('rockP1');
var paperP1 = document.getElementById('paperP1');
var scissorsP1 = document.getElementById('scissorsP1');

var player1Choice;  //Makes the variable "global"

rockP1.addEventListener('click', function() {
        P1choice.pick('r1')
    });  //listens for a click on the picture of the rock, and runs the function defined by the method pick, on the object P1choice

paperP1.addEventListener('click', function() {
        P1choice.pick('p1')
    });

scissorsP1.addEventListener('click', function() {
        P1choice.pick('s1')
    });

var P1choice = {
    pick: function(picked) {
        if(picked === 'r1') {
            player1Choice = "rock";
            console.log("Player 1 has picked rock");
        }
        else if(picked === 'p1') {
            player1Choice = "paper";
            console.log("Player 1 has picked paper");
        }
        else if (picked === 's1') {
            player1Choice = "scissors";
            console.log("Player 1 has picked scissors");
        }

    }  // This ends the method pick, on the object P1choice
}
/*******************************  Code for player 2  ***************/


var rockP2 = document.getElementById('rockP2');
var paperP2 = document.getElementById('paperP2');
var scissorsP2 = document.getElementById('scissorsP2');

var player2Choice;  //Makes the variable "global"

rockP2.addEventListener('click', function() {
        P2choice.pick('r2')
    });  //listens for a click on the picture of the rock, and runs the function defined by the method pick, on the object P1choice

paperP2.addEventListener('click', function() {
        P2choice.pick('p2')
    });

scissorsP2.addEventListener('click', function() {
        P2choice.pick('s2')
    });


var P2choice = {
    pick: function(picked) {
        if(picked === 'r2') {
           player2Choice = "rock";
            console.log("Player 2 has picked:" + player2Choice);
            
        }
        else if(picked === 'p2') {
            player2Choice = "paper";
            console.log("Player 2 has picked: " + player2Choice);
            
        }
        else if (picked === 's2') {
            player2Choice = "scissors";
            console.log("Player 2 has picked: " + player2Choice);
            
        }

    }  // This ends the method pick, on the object P2choice

    

}

/************************************* Compare the two choices ****/


var compare = document.getElementById('compare');

compare.addEventListener('click', function() {

    console.log("player 1 chose: " + player1Choice + " and player 2 chose: " + player2Choice);
    challenge.matchup(player1Choice,player2Choice)

    });


var challenge = {

    matchup: function(player1Choice,player2Choice) {

        if(player1Choice === player2Choice) {
            alert("The result is a tie!");
            console.log("It's a tie");
        }
        else if(player1Choice === "rock" && player2Choice === "paper") {
            alert("Player 2 wins.  Paper covers rock");
            console.log("player 2 wins.  paper beat rock");
        }
        else if(player1Choice === "rock" && player2Choice === "scissors") {
            alert("Player 1 wins.  Rock smashes scissors");
            consoe.log("player 1 wins.  rock smashes scissors");
        }
        else if(player1Choice === "paper" && player2Choice === "rock") {
            alert("player 1 wins.  Paper covers rock");
            console.log("player 1 wins. paper covers rock");
        }
        else if(player1Choice === "paper" && player2Choice === "scissors") {
            alert("Player 2 wins.  Scissors cuts paper");
            console.log("player 2 wins.  scissors cuts paper");
        }
        else if(player1Choice === "scissors" && player2Choice === "rock") {
            alert("Player 2 wins.  Rock smashes scissors");
            console.log("Player 2 wins.  Rock smashes scissors");
        }
        else if(player1Choice === "scissors" && player2Choice === "paper") {
            alert("Player 1 wins.  Scissors cuts paper");
            console.log("Player 1 wins.  Scissors cuts paper");
        }


    }


}


















