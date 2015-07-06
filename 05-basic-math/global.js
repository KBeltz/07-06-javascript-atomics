// Prompt the user for three numbers (make sure to parse them as integers, and make sure to store each in a well-named variable)
var x = parseInt(prompt("Please enter the first number:"), 10);
var y = parseInt(prompt("Please enter the second number:"), 10);
var z = parseInt(prompt("Please enter the third number:"), 10);

// Output the sum of the three numbers in a string: 7 + 4 + 12 = 23
alert(x+y+z);

// Output the difference when the second and third numbers are subtracted from the first: 7 - 4 - 12 = -9
alert(x-y-z);

// Output the product of the three numbers: 7 * 4 * 12 = 336
alert(x*y*z);

// Output the quotient of the first number divided by the second number: 7 / 4 = 1.75
alert(x/y);

// Output the result of incrementing the first number: 7++ = 8
alert(x++);

// Output the result of decrementing the second number: 4-- = 3
alert(y--);

// Bonus Challenges
//
// Learn about the compound assignment operators (like += and -=) -- what problem do these solve and how are they used? What are situations where you might use a compound assignment operator instead of simple assignment (with =)? Which is easier to read: x += 2; or x = x + 2;?
// Research the Javascript Math Object -- can you get some of these methods to work? I'll recommend Math.pow(), Math.max(), and Math.abs() as starting points.
