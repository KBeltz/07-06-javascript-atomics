// Tell the user that you're thinking of a number between 1 and 100 (go ahead and hard-code this number). Prompt the user to guess the number (and keep asking them if they get it wrong), then congratulate them when they guess correctly. This is a re-do of Atomic JS-06C.
//
// You can make up your own stretches for this one.

var number = "38";

var guess = parseInt(prompt("Pick a number between 1 and 100: "));

while (guess != number) {
  if (guess < 1 || guess > 100) {
    guess = prompt("Invalid input. Enter a number between 1 and 100: ");
  }
  else {
    guess = prompt("Incorrect. Try Again: ");
  }
}
if (number === guess) {
  alert("Job well done!");
}
