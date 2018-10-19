const lib =  require("./arrayLibrary");
const checkAssert = require("./testFrameWork.js").checkAssert;

//________________________testing isEven()____________________________
checkAssert(lib.isEven.name,[9],lib.isEven(9),false,"Error in isEven()");
checkAssert(lib.isEven.name,[1],lib.isEven(1),false,"Error in isEven()");
checkAssert(lib.isEven.name,[5],lib.isEven(5),false,"Error in isEven()");
checkAssert(lib.isEven.name,[0],lib.isEven(0),true,"Error in isEven()");
checkAssert(lib.isEven.name,[10],lib.isEven(10),true,"Error in isEven()");
console.log("isEven works fine\n");

//________________________testing add()____________________________
checkAssert(lib.add.name,[ ],lib.add([ ]),0,"Error in add()");
checkAssert(lib.add.name,[2,3,4],lib.add([2,3,4]),9,"Error in add()");
checkAssert(lib.add.name,[0,1,0],lib.add([0,1,0]),1,"Error in add()");
checkAssert(lib.add.name,[10,20,30],lib.add([10,20,30]),60,"Error in add()");
console.log("add works fine\n");

//________________________testing average()____________________________
checkAssert(lib.average.name,[],lib.average([]),0,"Error in average()");
checkAssert(lib.average.name,[2,3,4],lib.average([2,3,4]),3,"Error in average()");
checkAssert(lib.average.name,[0,1,2],lib.average([0,1,2]),1,"Error in average()");
checkAssert(lib.average.name,[10,23,30],lib.average([10,23,30]),21,"Error in average()");
console.log("average works fine\n");

//________________________testing splitEvenOddList()____________________________
checkAssert(lib.splitEvenOddList.name,[],lib.splitEvenOddList([]),{odd : [],even : []},"Error in splitEvenOddList()");
checkAssert(lib.splitEvenOddList.name,[2,3,4],lib.splitEvenOddList([2,3,4]),{odd:[3], even:[2,4]},"Error in splitEvenOddList()");
checkAssert(lib.splitEvenOddList.name,[0,1,0],lib.splitEvenOddList([0,1,0]),{odd : [1],even : [0,0]},"Error in splitEvenOddList()");
checkAssert(lib.splitEvenOddList.name,[9,1,3],lib.splitEvenOddList([9,1,3]),{odd : [9,1,3],even : []},"Error in splitEvenOddList()");
checkAssert(lib.splitEvenOddList.name,[12,13,21],lib.splitEvenOddList([12,13,21]),{odd : [13,21],even : [12]},"Error in splitEvenOddList()");
checkAssert(lib.splitEvenOddList.name,[10,20,30],lib.splitEvenOddList([10,20,30]),{odd : [],even : [10,20,30]},"Error in splitEvenOddList()");
console.log("splitEvenOddList works fine\n");

//________________________testing splitList()____________________________
checkAssert(lib.splitList.name,[],lib.splitList([],"odd"),[],"Error in splitList()");
checkAssert(lib.splitList.name,[2,3,4],lib.splitList([2,3,4],"odd"),[3],"Error in splitList()");
checkAssert(lib.splitList.name,[0,1,0],lib.splitList([0,1,0],"odd"),[1],"Error in splitList()");
checkAssert(lib.splitList.name,[9,1,3],lib.splitList([9,1,3],"odd"),[9,1,3],"Error in splitList()");
checkAssert(lib.splitList.name,[12,13,21],lib.splitList([12,13,21],"odd"),[13,21],"Error in splitList()");
checkAssert(lib.splitList.name,[10,20,30],lib.splitList([10,20,30],"odd"),[],"Error in splitList()");

checkAssert(lib.splitList.name,[],lib.splitList([],"even"),[],"Error in splitList()");
checkAssert(lib.splitList.name,[2,3,4],lib.splitList([2,3,4],"even"),[2,4],"Error in splitList()");
checkAssert(lib.splitList.name,[0,1,0],lib.splitList([0,1,0],"even"),[0,0],"Error in splitList()");
checkAssert(lib.splitList.name,[9,1,3],lib.splitList([9,1,3],"even"),[],"Error in splitList()");
checkAssert(lib.splitList.name,[12,13,21],lib.splitList([12,13,21],"even"),[12],"Error in splitList()");
checkAssert(lib.splitList.name,[10,20,30],lib.splitList([10,20,30],"even"),[10,20,30],"Error in splitList()");
console.log("splitList works fine\n");

//________________________testing findMin()____________________________
checkAssert(lib.findMin.name,[ ],lib.findMin([ ]),0,"Error in findMin()");
checkAssert(lib.findMin.name,[2,3,4,4],lib.findMin([2,3,4,4]),2,"Error in findMin()");
checkAssert(lib.findMin.name,[0,1,0],lib.findMin([0,1,0]),0,"Error in findMin()");
checkAssert(lib.findMin.name,[10,20,30],lib.findMin([10,20,30]),10,"Error in findMin()");
console.log("findMin works fine\n");

//________________________testing reverse()____________________________
checkAssert(lib.reverse.name,[ ],lib.reverse([ ]),[],"Error in reverse()");
checkAssert(lib.reverse.name,[2,3,4,4],lib.reverse([2,3,4,4]),[4,4,3,2],"Error in reverse()");
checkAssert(lib.reverse.name,[0,1,0],lib.reverse([0,1,0]),[0,1,0],"Error in reverse()");
checkAssert(lib.reverse.name,[10,20,30],lib.reverse([10,20,30]),[30,20,10],"Error in reverse()");
console.log("reverse works fine\n");

//________________________testing merge()____________________________
checkAssert(lib.merge.name,[[],[]],lib.merge([],[]),[],"Error in merge()");
checkAssert(lib.merge.name,[[2,3,4],[0,1]],lib.merge([2,3,4],[0,1]),[2,3,4,0,1],"Error in merge()");
checkAssert(lib.merge.name,[[0,1,0],[2,3,4]],lib.merge([0,1,0],[2,3,4]),[0,1,0,2,3,4],"Error in merge()");
checkAssert(lib.merge.name,[[10,20,30],[20,33,56,0,8]],lib.merge([10,20,30],[20,33,56,0,8]),[10,20,30,20,33,56,0,8],"Error in merge()");
console.log("merge works fine\n");

//________________________testing findIndex()____________________________
checkAssert(lib.findIndex.name,[[],0],lib.findIndex([ ],0),-1,"Error in findIndex()");
checkAssert(lib.findIndex.name,[[2,3,4,4],4],lib.findIndex([2,3,4,4],4),2,"error in findIndex()");
checkAssert(lib.findIndex.name,[[0,1,0],0],lib.findIndex([0,1,0],0),0,"Error in findIndex()");
checkAssert(lib.findIndex.name,[[10,20,30],12],lib.findIndex([10,20,30],12),-1,"Error in findIndex()");
console.log("findIndex works fine\n");

//________________________testing findNthElement()____________________________
checkAssert(lib.findNthElement.name,[[ ],0],lib.findNthElement([ ],0),-1,"Error in findNthElement()");
checkAssert(lib.findNthElement.name,[[2,3,4,4],3],lib.findNthElement([2,3,4,4],3),4,"Error in findNthElement()");
checkAssert(lib.findNthElement.name,[[0,1,0],0],lib.findNthElement([0,1,0],0),0,"Error in findNthElement()");
checkAssert(lib.findNthElement.name,[[10,20,30],12],lib.findNthElement([10,20,30],12),-1,"Error in findNthElement()");
console.log("findNthElement works fine\n");

//________________________testing fibonacci()____________________________
checkAssert(lib.fibonacci.name,[9],lib.fibonacci(9),[0,1,1,2,3,5,8,13,21],"Error in fibonacci()");
checkAssert(lib.fibonacci.name,[1],lib.fibonacci(1),[0],"Error in fibonacci()");
checkAssert(lib.fibonacci.name,[5],lib.fibonacci(5),[0,1,1,2,3],"Error in fibonacci()");
checkAssert(lib.fibonacci.name,[0],lib.fibonacci(0),[],"Error in fibonacci()");
checkAssert(lib.fibonacci.name,[10],lib.fibonacci(2),[0,1],"Error in fibonacci()");
console.log("fibonacci works fine\n");

//________________________testing extractDigits()____________________________
checkAssert(lib.extractDigits.name,[123],lib.extractDigits(123),[1,2,3],"Error in extractDigits()");
checkAssert(lib.extractDigits.name,[23481],lib.extractDigits(23481),[2,3,4,8,1],"Error in extractDigits()");
checkAssert(lib.extractDigits.name,[0],lib.extractDigits(0),[],"Error in extractDigits()");
checkAssert(lib.extractDigits.name,[09872],lib.extractDigits(09872),[9,8,7,2],"Error in extractDigits()");
console.log("extractDigits works fine\n");

//________________________testing countAboveAndBelowThreshold()____________________________
checkAssert(lib.countAboveAndBelowThreshold.name,[[],2],lib.countAboveAndBelowThreshold([],2),{above : 0, below : 0},"Error in countAboveAndBelowThreshold");
checkAssert(lib.countAboveAndBelowThreshold.name,[[2,3,4],3],lib.countAboveAndBelowThreshold([2,3,4],3),{above : 1, below : 1},"Error in countAboveAndBelowThreshold");
checkAssert(lib.countAboveAndBelowThreshold.name,[[0,1,0],1],lib.countAboveAndBelowThreshold([0,1,0],1),{above : 0, below : 2},"Error in countAboveAndBelowThreshold");
checkAssert(lib.countAboveAndBelowThreshold.name,[[9,1,3],9],lib.countAboveAndBelowThreshold([9,1,3],9),{above : 0,below : 2},"Error in countAboveAndBelowThreshold");
checkAssert(lib.countAboveAndBelowThreshold.name,[[12,13,21],4],lib.countAboveAndBelowThreshold([12,13,21],4),{above : 3,below : 0},"Error in countAboveAndBelowThreshold");
console.log("countAboveAndBelowThreshold works fine\n");
