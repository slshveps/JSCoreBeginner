"use strict";

function sumOfFirstHalf(numbers) {
  const endIndex = Math.ceil(numbers.length / 2);

  let sum = 0;

  for (let i = 0; i < endIndex; i++) {
    sum += numbers[i];
  }

  return sum;
}
