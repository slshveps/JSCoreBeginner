"use strict";

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("The second number cannot be zero.");
  }
  return a / b;
}
