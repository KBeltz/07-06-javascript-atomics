// This exercise is pretty similar to Part 1, but in this case you'll only display one message depending on the range your user's age falls into:
//
// Age 25 and older: "You can rent a car"
// Age 21 - 24: "Please don't drink and drive"
// Age 16 - 20: "You're eligible for a driver's license"
// Age 0 - 15: "You can't drive yet, but you'll be able to in a few years"
// Any negative number: "You haven't been born yet"
// NaN: "Sorry, but that's not a number"
// All of your program logic (i.e. the part that decides which output to display) should be contained in a single if / else if / else block, rather than in separate if statements.

var age = parseInt(prompt("Enter your age: "));

if (age >= 25) {
  alert("Congratulations, you can rent a car!");
}
else if (age >= 21) {
  alert("Please don't drink and drive!");
}
else if (age >= 16) {
  alert("You're eligible for a driver's license!");
}
else if (age >= 0 && age <= 15) {
  alert("You can't drive yet, but you'll be able to in a few years!");
}
else if (age < 0) {
  alert("You haven't been born yet!");
}
else {
  alert("Sorry, but that's not a number!");
}
