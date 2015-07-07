console.log("5 == '5' is " + (5 == '5')); //true
//Correct.

console.log("5 == 'five' is " + (5 == 'five')); //false
//Correct.

console.log("5 == '6' is " + (5 == '6')); //false
//Correct.

console.log("5 === '5' is " + (5 === '5')); //false
//Correct.

console.log("5 == 2 + 3 is " + (5 == 2 + 3)); //true
//Correct.

console.log("5 == 5 is " + (5 == 5)); //true
//Correct.

console.log("5 === 5 is " + (5 === 5)); //true
//Correct

console.log("true == 'true' is " + (true == 'true')); //true
//This prediction was incorrect. The === comparison means "equal value and equal type." //true is a boolean while 'true' is a string, therefore they are not of the same type.

console.log("true === 'true' is " + (true === 'true')); //false
//Correct.

console.log("true == false is " + (true == false)); //false
//Correct.

console.log("5 == 12 is " + (5 == 12)); //false
//Correct.

console.log("5 != 12 is " + (5 != 12)); //true
//Correct.

console.log("5 < 12 is " + (5 < 12)); //true
//Correct.

console.log("5 <= 12 is " + (5 <= 12)); //true
//Correct.

console.log("5 > 12 is " + (5 > 12)); // false
//Correct.

console.log("5 >= 12 is " + (5 >= 12)); // false
//Correct.
