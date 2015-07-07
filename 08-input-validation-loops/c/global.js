// Prompt the user for a number within 1 and 8, and keep prompting so long as they keep giving you good numbers. Stop prompting once they give you numbers outside of that range.
//
// As an extension, display an alert at the end with the average of the numbers they gave you.

var input = parseFloat(prompt("Enter a number between 1 and 8, inclusive:"));
var count = 0;
var total = 0;

while (input <= 8 && input >= 1) {
  total = total + input;
  input = parseFloat(prompt("Enter another number between 1 and 8, inclusive:"));
  count++;
}

alert("Average: " + (total/count));
