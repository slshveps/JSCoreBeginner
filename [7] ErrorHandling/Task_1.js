"use strict";

function validateInteger(number) {
  if (!Number.isInteger(number)) {
    throw new Error("The number is not an integer.");
  }
}
