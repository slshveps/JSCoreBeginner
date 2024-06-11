"use strict";

function repeatOperation(operation, interval, repetitions) {
  let count = 0;
  const intervalId = setInterval(function () {
    operation();
    count++;
    if (count === repetitions) {
      clearInterval(intervalId);
    }
  }, interval);
}
