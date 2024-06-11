"use strict";

function firstUniqueChar(str) {
  const charMap = {};

  for (const char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (const char of str) {
    if (charMap[char] === 1) {
      return char;
    }
  }

  return null;
}
