/* This is the javaScript for the number guessing game app. This code was written by Wyatt A. Grace for
Microsoft's edx course: Building Interactive Prototypes with JavaScript */
// Generate number for the user to guess:
var number = 41;
// Create a two numbers to define a range for the user to guess in
var numRange = [0,100];
var userGuess;
// Create an array to store user guesses:
var guesses = [];
// Create a boolean variable to track if the user guessed correctly
var won = false;
// Create while loop so the program only runs while there are 4 guesses or less
// Check if the guess is correct, if not check if it has been guessed before:
for(i = 0; i < 5; i++){
   // Get a user guess each iteration before and operations are done:
      userGuess = parseInt(prompt((5-i) + " Attempts remaining. " + "Enter a number between " + numRange[0] + " and " + numRange[1] + ": "));

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
   } 
}
if(won != true){
   document.write("You did not correctly guess the number... You could always refresh the browser and try again")
}

function previousGuess(guesses,userGuess){
   for(i = 0; i < guesses.length; i++){
      if(guesses[i] == userGuess){
         return true;
      }
   }
   return false;
}