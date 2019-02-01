/* This is the javaScript for the number guessing game app. This code was written by Wyatt A. Grace for
Microsoft's edx course: Building Interactive Prototypes with JavaScript */

// Tell the user the rules of the game before they get started:
alert("Rules of the Game: You will enter two numbers to create a range of values that a randomly generated number will sit between. You will have five attempts to guess this number. Guesses of the same number twice will not count against you.");
// Ask the user to enter 2 numbers to get the game started
var num1;
var num2;
var min;
var max;

for(i = 0; i < 2; i++){
   if(i == 0){
      num1 = parseInt(prompt("To start the game enter two numbers. Please enter " + (2-i) + " more numbers: "));
   }
   else{
      num2 = parseInt(prompt("To start the game enter two numbers. Please enter " + (2-i) + " more numbers: "));
   }
}
// Tell the user thank you for enter the two numbers to get the game started:
alert("Thank you for those lovely numbers, now let the games begin!")
// Now figure out which number was smaller
if(num1 < num2 || num1 == num2){
   min = num1;
   max = num2;
}
else{
   min = num2;
   max = num1;
}
// Tell user what the max and minumum values are:
alert("The number you must guess lies between " + min + " and " + max);

// Generate random number for the user to guess:
var number;
number = randomNumberGen(min,max);

// Create a variable to store the user's guess
var userGuess;
// Create an array to store user guesses:
var guesses = [];
// Create a boolean variable to track if the user guessed correctly
var won = false;

// Create while loop so the program only runs while there are 4 guesses or less
// Check if the guess is correct, if not check if it has been guessed before:
for(i = 0; i < 5; i++){
   // Get a user guess each iteration before and operations are done:
      userGuess = parseInt(prompt((5-i) + " Attempts remaining. " + "Enter a number between " + min + " and " + max + ": "));

   // Check if it is the correct number
   if(userGuess == number){
      document.write("Winner winner chicken dinner... You guessed the right number!");
      won = true;
      break
   }

   // Check if the number has been guessed before. If so tell the user.
   else if(previousGuess(guesses,userGuess)){
      alert("You have already guessed " + userGuess);
   }

   // At this point you know the user entered the wrong input so tell them. Add guess to array of guesses.
   else{
      guesses[i] = userGuess;
      alert(userGuess + " is incorrect");
      // Write to the document to create a list showing the user what they have guessed:
      document.write("Guess: " + (i+1) + " was: " + userGuess + " ");
   } 
}
if(won != true){
   document.write("You did not correctly guess the number..." + "The correct number was: " + number + "\n " + "You could always refresh the browser and try again");
}

function previousGuess(guesses,userGuess){
   for(i = 0; i < guesses.length; i++){
      if(guesses[i] == userGuess){
         return true;
      }
   }
   return false;
}

function randomNumberGen(min,max){
   var x = (max - min) * Math.random();
   var y = (x + min);
   y = Math.round(y);
   return y;
}