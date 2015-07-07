// Implement FizzBuzz (most of you will remember this from your interview to get into OCS). This program counts as normal, except that when the number is divisible by 3, you output "Fizz", when it's divisible by 5, you output "Buzz", and when it's divisible by both 3 and 5 (i.e. divisible by 15), output "FizzBuzz".

var start = parseInt(prompt("Enter the starting value: "));
var end = parseInt(prompt("Enter the end value: "));

if (start < end) {
  while (start <= end) {
    if (start % 3 === 0 && start % 5 === 0) {
      console.log("FizzBuzz!");
    }
    else if (start % 5 === 0) {
      console.log("Buzz!");
    }
    else if (start % 3 === 0) {
      console.log("Fizz!");
    }
    else {
      console.log(start);
    }
    start++;
  }
}
else if (start > end) {
  while (start >= end) {
    if (start % 3 === 0 && start % 5 === 0) {
      console.log("FizzBuzz!");
    }
    else if (start % 5 === 0) {
      console.log("Buzz!");
    }
    else if (start % 3 === 0) {
      console.log("Fizz!");
    }
    else {
      console.log(start);
    }
    start--;
  }
}
else {
  alert("Error!")
}
