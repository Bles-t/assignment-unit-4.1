console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {

  return `Hello, ${name}!`;
}
console.log(helloName("Your Name"));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {

  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log(addNumbers(23, 2)); addNumbers(23, 2);


// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber * secondNumber * thirdNumber;
}
console.log(multiplyThree(2, 1, 4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return number, true;
  }
  else {
    return false;
  }
}
console.log(isPositive(3));
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast(array) {
  if (array.length === 0) {
    return undefined;
  }
  else {
    return array[array.length - 1];
  }

}
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let element of array) {
    if (element === value) {
      return true;
    }

  }
  return false;
}
console.log(find(22, [3, 22, 4, 5]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (element of string) {
    if (element[0] === letter) {
      return true;
    }
  }
  return false
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (element of array) {
    sum += element
  }
  return sum
  // TODO: return the sum
}
console.log(sumAll([2, 43, 2, 10, 22]));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(inputArray) {
  let positiveNumber = [];

  for (number of inputArray) {
    if (number > 0) {
      positiveNumber.push(number)
    }
  }
  return positiveNumber
}
console.log(allPositive([2, 32, 4, -2, 4, 6]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
//Create a function that takes two numbers as arguments and returns their sum.

function addition(a, b) {
  ab = a + b
  return ab
}
console.log(addition(4, 5));
// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
