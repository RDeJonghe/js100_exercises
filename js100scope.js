// Variable Scope exercises from JS 100

// 1. It will say greeting is not defined. This won't log since the variable isn't declared until after. But note : All variables in JavaScript declared with var are hoisted. So in this case it's initialized as undefined, and later the value is set.

  // console.log(greeting);

  // var greeting = 'Hello world!';

// 2. This produces an error, let cannot be hoisted and cannot be accessed before initialization.
  // console.log(greeting);

  // let greeting = 'Hello world!';

// In contrast to var variables, let variables are not accessible before they are declared. For that reason the above code raises an error.

// 3. What will the following code log to the console and why? Don't run it until you have tried to answer.

// myValue is locally scoped to the curly braces. It is declared inside of the braces and available there. So it can't log it the way it is. Reference error, not defined.
  /*
  if (true) {
    let myValue = 20;
  }
  
  console.log(myValue);
  */

  // 4. What will the following code log to the console and why? Don't run it until you have tried to answer.

  // It will log 1 because the function is called and the function performs the log. Note that outer scope can be accessed by inner scope.
/*
  function myFunction() {
    let a = 1;
  
    if (true) {
      console.log(a);
    }
  }
  
  myFunction();
  */

  // 5. What will the following code log to the console and why? Don't run it until you have tried to answer.

  // This is an error since a is declared on two lines. A can be reassigned, just not decalred twice.
/*
  function myFunction() {
    let a = 1;
  
    if (true) {
      console.log(a);
      a = 2; // fix it by reassigning the value.
      console.log(a);
    }
  }
  
  myFunction();
*/

// 6. What will the following code log to the console and why? Don't run it until you have tried to answer.

// b can't be initialized with let. Have to do b = true without let. So this is an error. WRONG! THE VARIABLES HAVE DIFFERENT SCOPE, CAN REUSE THE NAME. THEY ARE DIFFERENT BECAUSE OF SCOPE. SO THIS WILL LOG FALSE.
  /*
  let a = 5;
  let b = false;

  if (a > 4) {
    let b = true;
  }

  console.log(b);
  */

// 7. What will the following code log to the console and why? Don't run it until you have tried to answer.

// This will log 1. a is global scoped so it can be accessed in the function. The function is called and the action of the function is to log.
  /*
  let a = 1;
  
  function myFunction() {
    console.log(a);
  }
  
  myFunction();
  */

// 8. What will the following code log to the console and why? Don't run it until you have tried to answer.

// This will console.log 2. The 'a' in myFunction is just a parameter name, it could be named anything. It doesn't mean that it is the variable a. So when the function is called with the b variable that value will be passed to the function and logged.
  /*
  let a = 1;
  
  function myFunction(a) {
    console.log(a);
  }
  
  let b = 2;
  
  myFunction(b);
  */

// 9. What will the following code log to the console and why? Don't run it until you have tried to answer.

// This will produce an error a is a globally scoped constant variable and can't be reassigned.
  /*
  const a = 1;
  
  function myFunction() {
    a = 2;
  }
  
  myFunction(a);
  */

// 10. What will the following code log to the console and why? Don't run it until you have tried to answer.

// My function is called and the value is reassigned to 'Jane'. So the log of a will be the entire object, but with firstName of Jane.

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);






