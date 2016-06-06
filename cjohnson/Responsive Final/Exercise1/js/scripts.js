console.log("Hello.");
var firstName = prompt("What is your first name?");
console.log(firstName);
var middleName = prompt("What is your first letter of your middle name?");
console.log(middleName);
var lastName = prompt("What is your last name?");
console.log(lastName);



alert("Your full name is " + lastName + " " + firstName + " " + middleName);


console.log("Math!");
var firstNumber = number(prompt("What is a number between 1 and infinity?"));
console.log(firstNumber);
var secondNumber = number(prompt("Another one?"));
console.log(secondNumber);

var product = firstNumber * secondNumber;
var sum = firstNumber + secondNumber;
var difference = firstNumber - secondNumber;
var quotient = firstNumber/secondNumber;


alert("The product of your numbers is " + product);

alert("The quotient of your numbers is " + quotient);

alert("The sum of your numbers is " + sum);

alert("The difference of your numbers is " + difference);




console.log("Lucky Number!");
var shoeSize = number(prompt("What is your shoe size?"));
var nameNumbers = number(prompt("How many numbers are in your name?"));

var luckyNum = shoeSize * nameNumbers;

alert("Your lucky number is " + luckyNum);