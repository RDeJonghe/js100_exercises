// Strings exercises from JS 100

// 1. Determine the length of the string "These aren't the droids you're looking for.".

"These aren't the droids you're looking for.".length; // can do this in REPL

let str = "These aren't the droids you're looking for.";
console.log(str.length);

// 2. Take the string 'confetti floating everywhere' and transform it to upper case.

console.log('confetti floating everywhere'.toUpperCase());

// 3. Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

function repeat(input1, input2) {
  let newString = '';
  for (let i = 0; i <= input1; i++) {
    newString = newString.concat('', input2)
  }
  return console.log(newString);
}

repeat(3, 'ha');

// book solved it like this:
function repeat(n, string) {
  let repetitions = '';

  while (n > 0) {
    repetitions += string;
    n -= 1; // this is how it will count down and hit the stopping point. Goes backwards.
  }

  return repetitions;
}

// 4. How can you assign this string to a single variable, preserving the line break?

// with template literals.

let multiStr = `A pirate I was meant to be!
Trim the sails and roam the sea!`;

console.log(multiStr);

// 5. Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

let isEqual = string1.toLowerCase() === string2.toLowerCase();
console.log(isEqual);

// 6. Write code that checks whether the string byteSequence contains the character x.
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));

// 7. Write a function that checks whether a string is empty or not. For example:
/*
function isBlank(str) {
  if (str.length > 0) {
    console.log(false);
  }
  else (console.log(true));
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
*/

// Book solution
function isBlank(string) {
  return string.length === 0;
}
