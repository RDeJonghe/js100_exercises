// Exercises for JS 100 Loops section

// 1. Will log even numbers
/*
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
*/

// 2. The code below logs the numbers from 1 to 10. Change it, so that it instead logs the numbers from 10 to 1 in decreasing order, and then logs 'Launch!'.
/*
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log('Launch!')
*/

// 3. Write a loop that logs greeting three times.
/*
let greeting = 'Aloha!';
for (let i = 0; i <= 2; i++) {
  console.log(i, greeting);
}
*/

// 4. Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.
/*
for (let i = 1; i <=100; i++) {
  console.log(i * 2);
}
*/

// 5. Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.
/*
let array = [1, 2, 3, 4];
let index = 0;

while (index <= array.length - 1) {
  console.log(array[index]);
  index += 1;
}
*/

// 6. Then write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.
/*
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let el of cities) {
  if (el === null) {
    continue;
  }
  else {
    console.log(el);
  }
}
*/

// 7. The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.

// Modify this:
/*
for (let i = 0; ; i += 1) {
  console.log("and on");
}
*/

for (let i = 1; i < 2; i++) {
  console.log('and on');
}

// can also do with a break statement
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}

// 8. Write a while loop that logs all odd natural numbers between 1 and 40.

let num = 1;
/*
while (num < 40) {
  console.log(num);
  num += 2;
}
*/

// or with do... while
/*
do {
  console.log(num);
  num += 2;
}
while (num < 40);
*/

// 9. Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i++) {
  if(fish[i] === 'Nemo') {
    break;
  }
  else if (console.log(fish[i]));
}

for (let el of fish) {
  if (el === 'Nemo') {
    break;
  }
  console.log(el);
}

// 10. do... while will run at least once even if it is false. So that is the utility if needed it can run once even if false.





