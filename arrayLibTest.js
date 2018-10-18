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

//________________________testing splitEvenOddList()____________________________
let error = "Error in splitEvenOddList()";
checkAssert(lib.splitEvenOddList([]),{odd : [],even : []},error);
checkAssert(lib.splitEvenOddList([2,3,4]),{odd:[3], even:[2,4]},error);
checkAssert(lib.splitEvenOddList([0,1,0]),{odd : [1],even : [0,0]},error);
checkAssert(lib.splitEvenOddList([9,1,3]),{odd : [9,1,3],even : []},error);
checkAssert(lib.splitEvenOddList([12,13,21]),{odd : [13,21],even : [12]},error);
checkAssert(lib.splitEvenOddList([10,20,30]),{odd : [],even : [10,20,30]},error);
console.log("splitEvenOddList works fine");

//________________________testing splitList()____________________________
checkAssert(lib.splitList([],"odd"),[],"Error in splitList()");
checkAssert(lib.splitList([2,3,4],"odd"),[3],"Error in splitList()");
checkAssert(lib.splitList([0,1,0],"odd"),[1],"Error in splitList()");
checkAssert(lib.splitList([9,1,3],"odd"),[9,1,3],"Error in splitList()");
checkAssert(lib.splitList([12,13,21],"odd"),[13,21],"Error in splitList()");
checkAssert(lib.splitList([10,20,30],"odd"),[],"Error in splitList()");

checkAssert(lib.splitList([],"even"),[],"Error in splitList()");
checkAssert(lib.splitList([2,3,4],"even"),[2,4],"Error in splitList()");
checkAssert(lib.splitList([0,1,0],"even"),[0,0],"Error in splitList()");
checkAssert(lib.splitList([9,1,3],"even"),[],"Error in splitList()");
checkAssert(lib.splitList([12,13,21],"even"),[12],"Error in splitList()");
checkAssert(lib.splitList([10,20,30],"even"),[10,20,30],"Error in splitList()");
console.log("splitList works fine");
