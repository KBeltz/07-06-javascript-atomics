// Prompt the user for a start value and an end value. Count from the start value to the end value using a for loop. Make sure to account for the start-value being equal to or greater than the end-value (should it not count? Should it count down instead of up in such cases?).
//
// Extend this by asking the user what increment they want to count by.

var start = parseInt(prompt("Enter the starting value: "));
var end = parseInt(prompt("Enter the end value: "));
var increment = parseInt(prompt("Enter the increment: "));

if (start < end) {
  for (; start <= end;  start = start + increment) {
    alert(start);
  }
}
else if (start > end) {
  for (; start >= end;  start = start - increment) {
    alert(start);
  }
}
else {
  alert("Error! I cannot count with the numbers you have given me.");
}
