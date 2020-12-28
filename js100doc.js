// JS 100 Exercises: Documentation

// 3. How can we access the element 'and' in the array 
let meal = ['fish', 'and', 'chips'];
console.log(meal[1]);

// 4. It will say 'undefined'
console.log(meal[10]);

// 5. What are the return values of the statements on lines 3 to 5? Refer to the MDN documentation about the Array object for help.

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

(trees[trees.length - 1]); // palm tree
console.log(trees[trees.length - 1]);
trees.pop(); // trees will now have first three elements, palm tree will be removed
console.log(trees)
trees[trees.length - 1]; // since palm tree is removed, this will be sequoia
console.log(trees[trees.length - 1]);

// 6. Look up the MDN documentation for the typeof operator. What is its return value? Determine what the following statements will return:

// type of will return a string that indicates 'number', 'string', 'boolean,' etc.

typeof 23.5; // number
typeof 'Call me Ishmael.'; //string
typeof false; // boolean
typeof 0; // number
typeof null;  // null - nope, this returns object but the object return value is a bug.
typeof undefined; // undefined

// 7. 
/*
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

// What will the following statements return?
console.log(typeof tweet); // string
console.log(typeof words); // array - Arrays are objects! so type of is object
console.log(typeof isValid); // true
*/

// 8. Method Chaining
/*
let tweet = 'Starting to get the hang of it... #javascript #launchschool';
// What will the following statements evaluate to?
tweet.split(' '); // this will return an array of the different words, it is split at the space
console.log(tweet.split(' ').reverse()); // this will reverse the order of the array, 
console.log(tweet.split(' ').reverse().join(' ')); // this will turn it back to a string by concatenating elements of the array into a string
*/

// 9.

console.log('8' == 8); // this is true, it's equality and the values are coerced to match
console.log('8' === 8); // this is false because of strict equality, have to be exactly equal and these are not

// 10. Using the documentation, determine how we can find the largest numeric value that can be represented in JavaScript. Write a line of code that returns this value.

console.log(Number.MAX_SAFE_INTEGER);

// 11. Arithmetic Operator Precedence
  // Exponentiation, on the other hand, is right-associative, so 2 ** 3 ** 2 is the same as 2 ** (3 ** 2)
  // exponents come before division

  4 * 5 + 3 ** 2 / 10 // so 3 ** 2 comes first,  then mult, then div, last add so 20.9
console.log(4 * 5 + 3 ** 2 / 10);

// 12.
console.log(Date.now());
// This returns a really big number, my guess it's something like the number of seconds since JS started. Since 1970 MDN says.

// 13.
// Should use .getFullYear() since getYear() is deprecated. .getFullYear() works with years after 2000

// 14. How many arguments does the Array.prototype.join() method expect?
// Expects one argument, it needs the separator. Default separator is a comma , any excess arguments are ignored

// 15. Find out how we can join two or more strings together.
// .concat method

let str1 = 'Back';
let str2 = ' Once Again';
let str3 = str1.concat(str2);
console.log(str3);

// 16. Missing ()

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

// 17. Length is a property, it doesn't need ()

let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}







