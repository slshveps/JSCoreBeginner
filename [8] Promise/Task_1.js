"use strict";

function sequentialAsyncOperations() {
  function asyncOperation(value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Async operation completed with value:", value);
        resolve(value);
      }, 1000);
    });
  }

  asyncOperation(1)
    .then((value) => asyncOperation(value + 1))
    .then((value) => asyncOperation(value + 1))
    .then((value) => asyncOperation(value + 1))
    .catch((error) => console.error("Error:", error));
}
