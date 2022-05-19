const x = 6;
let aA = 4;
let bB = 7;

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function questionSeven(num1, num2, numX) {
  let preSum = num1 + num2;
  let finalSum = preSum + numX;
  console.log("The finalSum is...", finalSum);
  return finalSum;
}
questionSeven(aA, bB, x);

// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const questionEight = (num1, num2, numX) => {
  return num1 + num2 + numX;
};

console.log("Answer to questionEight is...", questionEight(aA, bB, x));

// 9. Write a function that returns another function. (use arrow functions please)

const addThis = (numAdd) => {
  return questionEight(aA + numAdd, bB + numAdd, x + numAdd);
};

console.log("The answer to questionNine is...", addThis(4));

// 10. given the following code:

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2));

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.

// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};
