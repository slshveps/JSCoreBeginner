"use strict";

function testHoisting() {
  console.log("Using var:");
  console.log(a);
  var a = 1;
  console.log(a);

  console.log("Using let:");
  try {
    console.log(b);
  } catch (e) {
    console.log(e.message);
  }
  let b = 2;
  console.log(b);

  console.log("Using const:");
  try {
    console.log(c);
  } catch (e) {
    console.log(e.message);
  }
  const c = 3;
  console.log(c);
}

testHoisting();
