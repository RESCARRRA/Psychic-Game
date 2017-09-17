// Define the array of alphabet letters that computer can pick from
var abc = [" a", " b", " c", " d", " e", " f", " g", " h", " i", " j", " k", " l", " m", " n", " o", " p", " q", " r", " s", " t", " u", " v", " w", " x", " y", " z"];
// Set the initial global variables
var wins = 0;
var losses = 0;
var guessesRemain = 9;
// guessesUsed is an array that will hold all the user's guesses in each round
var guessesUsed = [];
// userGuess is what the user picks by pressing a key
var userGuess = [];
// Generate and console.log a random letter to be stored in variable entitled, mysteryLetter (hidden from user)
var mysteryLetter = abc[Math.floor(Math.random() * abc.length)];
console.log(" mysteryChoice: " + mysteryLetter);
// When a key is pressed, the event function is triggered
 document.onkeyup = function(event) {
    // When user presses key/guesses letter, the letter is converted to lowercase and saveed to variable userGuess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(" " + userGuess);
    // Conditional: if the userGuess is unique/new letter and an alphabetical character/letter...
    if (guessesUsed.indexOf(" " + userGuess) < 0 && abc.indexOf(" " + userGuess) >= 0) {
      //  ...add the new letter to the guessesUsed array. 
      guessesUsed.push(" " + userGuess);
      // ...subtract 1 from guessesRemain.
      guessesRemain--;
    }
    // Conditional: if userGuess is equal to mysterLetter...
    if (mysteryLetter === (" " + userGuess)) {
      // ...the 'wins' counter is increased by 1 and recorded
      wins++;
      // ...alert with outcome of win trial is shown to user
      alert("Woohoo! You won! The letter I was thinking of was " + mysteryLetter);
      // ...game resets
      resetGame();
    }
    // Conditional: if guessesRemain equates to 0...
    if (guessesRemain === 0) {
      // ...the 'losses' counter is increased by 1 and recorded
      losses++;
      // ...alert with outcome of loss trial is shown to user
      alert("Ouch! You lost! The letter I was thinking of was " + mysteryLetter);
      // ...game resets
      resetGame();
    }
    // The querySelector() method returns the first child element that matches specifications of element
    // below, it selects the <html> element and stores a reference to it via variable with same name — enabling score updates as the user progresses in game :) 
    var html = "<p><h3>Guess what letter I am thinking of...</h3></p>" + "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h3>Losses: " + losses + "</h3></p>" + "<p><h3>Guesses Left: " + guessesRemain + "</h3></p>" + "<p><h3>Your guesses so far: " + guessesUsed + "</h3></p>";
    document.querySelector("#game").innerHTML = html;
  }
  //Rather than including several lines of code after the win or loss conditionals, the reset funcntion handles all that jazz! 
function resetGame() {
  guessesRemain = 9;
  guessesUsed = [];
  mysteryLetter = abc[Math.floor(Math.random() * abc.length)];
  console.log(" mysteryChoice: " + mysteryLetter);
}s