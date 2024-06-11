"use strict";

function increaseByTenPercent(numbers) {
  const increasedNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    increasedNumbers.push(numbers[i] * 1.1);
  }

  return increasedNumbers;
}
