// JS 100 Exercises for Functions 1

// 1. Examine the example function invocation below. Write the function sum, such that it accepts two arguments and returns the sum of its arguments. You may assume that the function arguments will always be numbers.

// sum(22, 10); // 32

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(22, 10));

// 2. Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' to the console. What is the return value of the function?

function brendanEichQuote() {
  return console.log('Always bet on JavaScript');
}

brendanEichQuote();

// 3. Let's generalize the function from the previous exercise a bit. Implement a function cite that takes two string arguments: the author of the quote and what they said. It then logs the quote to the console, as in the following example.

function cite(who, whatSaid) {
  console.log(`${who} said: ${whatSaid}`);
}
cite('Brendan Eich', 'Always bet on JavaScript');

// 4. Write a function that accepts a single argument, a number, and returns the result of multiplying its argument by an exponent of 2 (also known as squaring the number).

function square(num) {
  return num ** 2;
}

console.log(square(3));

// 5. Nothing the function isn't called with (). To call function add ()
/*
function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree();
*/

// 6. Write a function that compares the length of two strings. It should return -1 if the first string is shorter, 1 if the second string is shorter, and 0 if they're of equal length, as in the following example:





function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    return -1;
  }
  else if (str2.length < str1.length) {
    return 1;
  }
  else {
    return 0;
  }
}

console.log(compareByLength('patience', 'perseverance'));
console.log(compareByLength('strength', 'dignity'));     
console.log(compareByLength('humor', 'grace'));

// 7. Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'

let str1 = 'Captian Ruby';
let str2 = str1.replace('Ruby', 'JavaScript');
console.log(str2);

// 8. Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

function greet(code) {
  if (code === 'pt') {
    return 'Olá!';
  }
  if (code === 'de') {
    return 'Hallo!';
  }
  else {
    return 'Hello';
  }
}

console.log(greet('pt'));
console.log(greet('de'));
console.log(greet('yo'));

// 9. Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

function extractLanguage(code) {
  let abbr = code.slice(0, 2)
  return abbr
}


console.log(extractLanguage('en_US.UTF-8'));  // 'en'
console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// 10. Similar to the previous exercise, now write a function that extracts the region code from a locale.

function extractRegion (code) {
  return code.slice(3, 5);
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

// 11. Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

function localGreet(code) {
  if (extractRegion(code) === 'US') {
    return 'Howdy';
  }
  if (extractRegion(code) === 'GB') {
    return 'Hello';
  }
  else {
    return 'Do you speak English?';
  }
}
console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'