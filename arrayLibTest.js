const assert = require("assert");
const lib =  require("./arrayLibrary");

const checkAssert = function(expectedOutput, actualOutput, errorMessage) {
  assert.deepEqual(expectedOutput,actualOutput,errorMessage);
}

//________________________testing isEven()____________________________
checkAssert(lib.isEven(9),false,"Error in isEven()");
checkAssert(lib.isEven(1),false,"Error in isEven()");
checkAssert(lib.isEven(5),false,"Error in isEven()");
checkAssert(lib.isEven(0),true,"Error in isEven()");
checkAssert(lib.isEven(10),true,"Error in isEven()");
console.log("isEven works fine");

//________________________testing add()____________________________
checkAssert(lib.add([ ]),0,"Error in add()");
checkAssert(lib.add([2,3,4]),9,"Error in add()");
checkAssert(lib.add([0,1,0]),1,"Error in add()");
checkAssert(lib.add([10,20,30]),60,"Error in add()");
checkAssert(lib.add([1.34,6.8]),8.14,"Error in add()");
console.log("add works fine");

//________________________testing createOddList()____________________________
checkAssert(lib.createOddList([]),[],"Error in createOddList()");
checkAssert(lib.createOddList([2,3,4]),[3],"Error in createOddList()");
checkAssert(lib.createOddList([0,1,0]),[1],"Error in createOddList()");
checkAssert(lib.createOddList([9,1,3]),[9,1,3],"Error in createOddList()");
checkAssert(lib.createOddList([12,13,21]),[13,21],"Error in createOddList()");
checkAssert(lib.createOddList([10,20,30]),[],"Error in createOddList()");
checkAssert(lib.createOddList([1.34,6.8]),[1.34,6.8],"Error in createOddList()");
console.log("createOddList works fine");

