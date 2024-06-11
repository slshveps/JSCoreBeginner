"use strict";

function testScope() {
  if (true) {
    var xVar = "var variable";
    let xLet = "let variable";
    const xConst = "const variable";
    console.log("Inside block:");
    console.log("xVar:", xVar);
    console.log("xLet:", xLet);
    console.log("xConst:", xConst);
  }

  console.log("Outside block:");
  console.log("xVar:", xVar);

  try {
    console.log("xLet:", xLet);
  } catch (e) {
    console.log("xLet is not accessible outside the block:", e.message);
  }

  try {
    console.log("xConst:", xConst);
  } catch (e) {
    console.log("xConst is not accessible outside the block:", e.message);
  }
}

testScope();
