// Implement the 99 Bottles of Beer on the Wall song using a loop. Make sure to account for having 1 bottle (instead of "1 bottles"). Use a while loop.
var drink = parseInt(prompt("How many bottles?"));

while (drink >= 0) {
  if (drink === 1) {
    console.log(drink + " bottle of beer on the wall!");
    alert("The end!");
    drink--;
  }
  else {
    console.log(drink + " bottles of beer on the wall!");
    drink--;
  }
}
