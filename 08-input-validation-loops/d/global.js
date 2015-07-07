// Re-do Atomic JS-06F. Prompt the user for all 3 legs of a triangle, then prompt again (for all three legs) if the triangle is not valid.

var a = parseFloat(prompt("Length of the first side: "));
var b = parseFloat(prompt("Length of the second side: "));
var c = parseFloat(prompt("Length of the third side: "));

console.log("a + b = " + (a + b));
console.log("a + c = " + (a + c));
console.log("b + c = " + (b + c));

if (a + b > c && a + c > b && b + c > a) {
  var valid = true;
}
else {
  var valid = false;
}

while (valid === false) {
  var a = parseFloat(prompt("Invalid Triangle. Try again. Length of the first side: "));
  var b = parseFloat(prompt("Length of the second side: "));
  var c = parseFloat(prompt("Length of the third side: "));

  if (a + b > c && a + c > b && b + c > a) {
    var valid = true;
  }
  else {
    var valid = false;
  }
}

if (valid === true) {
  alert("Job well done!");
}
