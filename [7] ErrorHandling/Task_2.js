"use strict";

function accessUndefinedProperty(obj) {
  try {
    const value = obj.undefinedProperty;
    console.log("Value:", value);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Caught TypeError:", error.message);
    } else {
      console.error("Caught unexpected error:", error);
    }
  }
}
