const assert = require("assert");

const checkAssert = function(func, inputs, actualOutput, expectedOutput, errorMessage) {
//  generateTestReports(func, inputs[], actualOutput, expectedOutput, errorMessage);
  console.log(func,inputs);
  assert.deepEqual(expectedOutput,actualOutput,errorMessage);
}

//const generateTestReports  = function() {
//  console.log
//}

exports.checkAssert = checkAssert;
