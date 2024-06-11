"use strict";

function isSubset(obj1, obj2) {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (!(obj1.hasOwnProperty(key) && obj1[key] === obj2[key])) {
        return false;
      }
    }
  }
  return true;
}
