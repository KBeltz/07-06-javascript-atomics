// Pick a number and hardcode it into your program (like you did with the password above: var secretNumber = 23;). Prompt the user for a number (you can collect this as a string or as an integer), then display an alert letting the user know if their answer was correct or incorrect (much like you did with the "Password Game" atomic).
var magicNumber = 0;
var guess = parseInt(prompt("Enter a number: "));

if (guess === magicNumber) {
  alert("Correct!");
}
else {
  alert("Incorrect :( ");
}
