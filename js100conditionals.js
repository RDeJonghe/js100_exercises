// Conditionals exercises from JS 100

// 1. falsy: 0, '' (empty string), false, undefined, null, NaN

// 2. Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

let randomNumber = Math.round(Math.random());
if (randomNumber === 1) {
  console.log('Yes!');
}
if (randomNumber === 0) {
  console.log('No.');
}

// 3. Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

(randomNumber === 1) ? console.log('Yes!') : console.log('No.');
// can also do with 'truthy', if 'truthy'
(randomNumber) ? console.log('Yes!') : console.log('No.');

// 4. Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

// Write an if statement that logs:

// "It's a beautiful day!" if weather is assigned to the string "sunny",
// "Grab your umbrella." if weather is assigned to the string "rainy", and
// "Let's stay inside." otherwise.
// Test your code with different values for weather.
/*
let weather = 'sunny';

if (weather === 'sunny') {
  console.log('It\'s a beautiful day!');
}
else if (weather === 'rainy') {
  console.log('Grab your umbrella');
}
else {
  console.log('Let\'s stay inside');
}
*/

// 5. It will console.log neigh, tweet tweet, *cricket* because there are no break statements in the different cases

// 6. Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.

let weather = 'rainy';

switch (weather) {
  case 'sunny' :
    console.log('It\'s a beautiful day!');
    break;
  case 'rainy' :
    console.log('Grab your umbrella');
    break;
  case 'snowy' :
    console.log('Dress warm');
    break;
  default : console.log('Let\'s stay inside');
}

// 7. This will be true. The way this is set up it will always check to be true.

// 8. This will never be true, it's checking with &&. one of the values is false, it will always be false

// 9. Admission price is $3.99 because of not operator. 

// 10. logs true. Need the parenthesis in this case because of operator precedence

