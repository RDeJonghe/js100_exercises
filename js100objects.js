// Objects exercises from JS 100

// 1. Write the code necessary to retrieve the value of the courses property of our student object.
let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};
/*
console.log(student.courses);
console.log(student['age']); // note with bracket notation you need to put the key in quotes
*/

// 2. Given the below object jane, write code that retrieves the country in which Jane is located.
/*
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};
console.log(jane.location.country);
*/

// 3. Below is a simple object representing our dog, Fido. On lines 8 and 9, write code to add properties 'age' and 'favorite food' to the fido object.

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 6; // Add property 'age'.
fido['favorite food'] = 'dog treats' // Add property 'favorite food'.
// console.log(fido);

// 4. Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.
/*
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet (name) {
    console.log(`Hej, ${name}!`);
  }
};

jane.greet('Bobby'); // Hej, Bobby!
*/

// 5. Before running any code, determine what difference there will be in the output of the two code snippets below (if any).

// Second snippet won't work because it doesn't include the '' inside the bracket notation. WRONG
// ANSWER: Bracket notation can accept expressions like variables. So in the bracket notation '' aren't needed, it is the name of that variable. It takes the value of that variable and then uses that as the key name. So it works.

// 6. We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.
/*
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === 'true') { // fix is here, it has to be a string. The property name is a string.
    console.log("It's true!");
  }
}
*/

// 7. Write code that stores all of the vehicle property names in an array called keys.
/*
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = [];

for (let prop in vehicle) {
  keys.push(prop)
}
console.log(keys);
*/
//  OR
/*
let keys = Object.keys(vehicle);

console.log(keys);
*/

// 8. Convert the person object into a nested array nestedPerson, containing the same key-value pairs.
/*
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let nestedPerson = Object.entries(person);
console.log(nestedPerson);
*/

// 9. Write code that does the reverse, starting from a nested array of pairs and building an object.
/*
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = {};

for (let i = 0; i < nestedArray.length; i++) {
  let row = nestedArray[i];
  
  obj[row[0]] = row[1];
}

console.log(obj);
*/

// OR

// can use Object.fromEntries()
/*
let obj = Object.fromEntries(nestedArray);
console.log(obj)
*/
// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// 10. Write a function clone that takes an object as argument and returns a shallow copy of that argument. Shallow copy means that it returns a new object that has the same key/value pairs, but that you don't need to worry about cloning the values as well. The code below demonstrates the expected behaviour.

function clone(obj) {
  function clone(obj) {
    return Object.assign({}, obj);
  }
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

