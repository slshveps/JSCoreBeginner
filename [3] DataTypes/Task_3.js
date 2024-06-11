"use strict";

function sumFirstAndLastDigit(num) {
  const numStr = num.toString();

  const firstDigit = parseInt(numStr[0]);
  const lastDigit = parseInt(numStr[numStr.length - 1]);

  const sum = firstDigit + lastDigit;

  console.log(`The sum of the first and last digit of ${num} is ${sum}.`);
}
