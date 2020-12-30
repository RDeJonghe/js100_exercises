// Arrays exercises from JS 100

// 1. Write a function that returns the first element of an input array. For example:
// What would you return if the input array was empty? Would return undefined.

let planets = ['Earth', 'Moon', 'Mars'];
/*
function first(arr) {
  return arr[0];
}

console.log(first(planets)); // 'Earth'
*/

// 2. Write a function that returns the last element of an input array. For example:

/*
function last(arr) {
  return arr[arr.length -1];
}

console.log(last(planets));
*/

// 3. Remove 'fossil' from the array, then add 'geothermal' to the end of the array.
/*
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal');
console.log(energy);
*/

// 4. Split the string alphabet into an array of characters.
/*
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

let alphArray = (alphabet.split(''));
console.log(alphArray);

// or 
console.log(Array.from(alphabet));
*/

// 5. Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];
/*
let count = 0;

for (let el of scores) {
  if (el >= 100) {
    count += 1;
  }
}
console.log(count);
*/

//  OR
/*
let topScores = [];

for (let el of scores) {
  if (el >= 100) {
    topScores.push(el);
  }
}
console.log(topScores);
console.log(topScores.length);
*/

// OR
/*
let highScoresCount = scores.filter(function high(el) {
  return el >= 100;
}
)
console.log(highScoresCount.length);
*/

// OR

// console.log(scores.filter(el => el >= 100).length)

// 6. We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
/*
for (let i = 0; i < vocabulary.length; i++) {
  let row = vocabulary[i];
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}
*/
// OR
/*
vocabulary = vocabulary.flat(); // this turns the array into only a single deep array.
for (let el of vocabulary) {
  console.log(el);
}
*/

// 7. Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

// This will print false. They are two different arrays, pointing to different spots in memory.
/*
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
*/

// 8. How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:
/*
let nums = [2, 4, 6];

function filter(input) {
  return Array.isArray(input);
}

console.log(filter(nums));
*/

// 9. The destinations array contains a list of travel destinations. Write a function that checks whether or not a particular destination is included within destinations, without using the built-in method Array.prototype.includes().

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
/*
function contains(city, arr) {
  for (let el of arr) {
    if (el === city) {
      return true;
    }
  }
  return false; // return for false has to be here outside of for block.
}

  console.log(contains('Naples', destinations)); // true
  console.log(contains('New York City', destinations)); // false
  */

// OR
/*
function contains(element, list) {
  return list.indexOf(element) >= 0; // .indexOf will return -1 if the element isn't in the index
}

console.log(contains('Paris', destinations));
*/

// 10. We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).
/*
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

let passcode2 = passcode.join('-');
console.log(passcode2);
let passcode3 = passcode.join('');
console.log(passcode3);
*/

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// 11. Write code that removes the items from 'groceryList' one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
/*
for (let i = 0; i < groceryList.length;) {
  let removedItem;
  removedItem = groceryList.shift();
  console.log(removedItem);
}
console.log(groceryList);
*/

// book solution: use a while loop

while (groceryList.length > 0) {
  let removedItem;
  removedItem = groceryList.pop();
  console.log(removedItem);
}
console.log(groceryList);









