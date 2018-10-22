const assert = require("assert");

const checkAssert = function(func, inputs, actualOutput, expectedOutput, errorMessage) {
  generateTestReports(func, inputs, actualOutput, expectedOutput);
  assert.deepEqual(expectedOutput,actualOutput,errorMessage);
}

const repeat = function(char) {
 return repeatChar = function(times) {
  return new Array(times).fill(char).join(""); 
 }
}

const counter = function(count) {
  return function () {
    return count++;
  }
}

const count = counter(1);
const repeatSpace = repeat(" ");
const repeatDash = repeat("-");

const createBorder = function() {
  let border = repeatDash(150) ;
  console.log(border);
}

const createHeader = function() {
  let functionHeader = "Sl.| " + leftJustifier("FunctionName",30) + " | ";
  functionHeader += leftJustifier("Inputs",30) + " | ";
  functionHeader += leftJustifier("Actual Output",50) + " | ";
  functionHeader += leftJustifier("Expected Output",30) ;
  createBorder();
  console.log(functionHeader);
  createBorder();
}

const generateTestReports = function(func, inputs, actualOutput, expectedOutput) {
  let serial = count();
  if( serial == 1) { 
    createHeader();
  }
  let functionTest = leftJustifier(JSON.stringify(func),30);
  let givenInputs = leftJustifier(JSON.stringify(inputs),30);
  let output = leftJustifier(JSON.stringify(actualOutput),50);
  console.log("",serial,"|",functionTest,"|",givenInputs,"|",output,"|",expectedOutput);
}

const leftJustifier = function(text,width) {
  return text+repeatSpace(width - text.length); 
}

exports.checkAssert = checkAssert;
