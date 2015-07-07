var password = "B3stP4ssword!";
var attempt = prompt("Password: ");

if (attempt == password) {
  alert("Good job!");
}
else {
  alert("Sorry. The password is actually " + password + ".");
}
