const assert = require("assert");

const checkAssert = function(func, inputs, actualOutput, expectedOutput, errorMessage) {
  generateTestReports(func, inputs, actualOutput, expectedOutput);
  assert.deepEqual(expectedOutput,actualOutput,errorMessage);
}

const generateTestReports = function(func, inputs, actualOutput, expectedOutput) {
  let functionTest = leftJustifier(JSON.stringify(func),30);
  let givenInputs = leftJustifier(JSON.stringify(inputs),30);
  let output = leftJustifier(JSON.stringify(actualOutput),50);
  console.log("|",functionTest,"|",givenInputs,"|",output,"|",expectedOutput);
}

const leftJustifier = function(text,width) {
  return text+repeatSpace(width - text.length); 
}

const repeatSpace = function(times) {
  return new Array(times).fill(" ").join(""); 
}
exports.checkAssert = checkAssert;
