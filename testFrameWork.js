const assert = require("assert");

const checkAssert = function( actualOutput, expectedOutput, errorMessage) {
//  generateTestReports(func, actualOutput, expectedOutput);
  assert.deepEqual(expectedOutput,actualOutput,errorMessage);
}

//const generateTestReports  = function() {
//  console.log
//}

exports.checkAssert = checkAssert;
