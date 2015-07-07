// Prompt the user for a start value and an end value. Count from the start value to the end value using a while loop. Make sure to account for the start-value being equal to or greater than the end-value (should it not count? Should it count down instead of up in such cases?).
//
// Extend this by asking the user what increment they want to count by.

var start = parseInt(prompt("Enter the starting value: "));
var end = parseInt(prompt("Enter the end value: "));
var increment = parseInt(prompt("Enter the increment: "))

if (start < end) {
  while (start <= end) {
    alert(start);
    start = start + increment;
  }
}
else if (start > end) {
  while (start >= end) {
    alert(start);
    start = start - increment;
  }
}
else {
  alert("Error!")
}
