"use strict";

function factorial(n) {
  if (n < 0) {
    throw new Error("Negative numbers are not allowed.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
