// Create a secret password (hard-code it as a string). Prompt the user for the password. Keep prompting until they correctly input the password, then congratulate them on a job well done. This is effectively a redo of Atomic JS-06B.

var password = "passw0rd";

var userInput = prompt("Password: ");

while (password != userInput) {
  userInput = prompt("Try Again: ");
}
if (password === userInput) {
  alert("Job well done!");
}
