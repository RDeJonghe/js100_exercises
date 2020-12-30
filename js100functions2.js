// Second Functions Exercises from JS 100

// 1. How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation?

// use an equal sign to set the default parameter
/*
function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!
*/

// 2. Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:
/*
function greet(first = 'Hello', second = 'world!') {
  console.log(first + ', ' + second);
}

greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!
*/

// 3. Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.
/*
function greet() {
  console.log(`${greeting()}, ${recipient()}`);
}

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient()}`);
}

greet();
*/

// 4. Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows. Note that formular requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).

function calcBMI(height, weight) {
  heightInMeters = height / 100;
  let bmi = weight / heightInMeters**2;
  return bmi.toFixed(2);
}

console.log(calcBMI(180, 70));
// let result = Number(calcBMI(180, 70)).toFixed(2); // can do this without 'number', change made above

// 5. Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.

/*
function catAge(num) {
  let y1 = 15;
  let y2 = 9;
  if (num === 0) {
    return 0;
  }
  else if (num === 1) {
    return y1;
  }
  else if (num === 2) {
    return y1 + y2;
  }
  else {
    return ((num - 2) * 4) + y1 + y2;
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
*/

// This is a way that was posted to solve this. I've never seen multiple : and ?
/*
let catAge = (number) => {
  return (number === 1 ? 15 : number === 2 ? 9 : number >= 3 ? ((number - 2) * 4) + 24 : 0);
}
*/

// 6. Create a function removeLastChar that takes a string as argument, and returns the string without the last character.
/*
function removeLastChar(str) {
  let arr = [];
  for (let el of str) {
    arr.push(el);
  }
  arr.pop();
  let removed = (arr.join(''));
  return removed;
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'
console.log(removeLastChar('Back once again'));
*/

// 7. Refactor the function below using arrow syntax. Line 9 should still log the same sentence.

const template = 'I VERB NOUN.';

/*let sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);

  console.log(sentence('like', 'birds'));
*/
// logs: I like birds.

// can also write like this
/*
let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);
console.log(sentence('love', 'birds'));
*/

// 8. The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = () => ({ // because of () parenthesis you can do this with implicit return and arrow
    level: 1,
    score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);






