const lib =  require("./arrayLibrary");
const checkAssert = require("./testFrameWork.js").checkAssert;

//________________________testing isEven()____________________________
checkAssert(lib.isEven.name,[9],lib.isEven(9),false);
checkAssert(lib.isEven.name,[1],lib.isEven(1),false);
checkAssert(lib.isEven.name,[5],lib.isEven(5),false);
checkAssert(lib.isEven.name,[0],lib.isEven(0),true);
checkAssert(lib.isEven.name,[10],lib.isEven(10),true);
console.log("isEven works fine\n");

//________________________testing addElements()____________________________
checkAssert(lib.addElements.name,[ ],lib.addElements([ ]),0);
checkAssert(lib.addElements.name,[2,3,4],lib.addElements([2,3,4]),9);
checkAssert(lib.addElements.name,[0,1,0],lib.addElements([0,1,0]),1);
checkAssert(lib.addElements.name,[10,20,30],lib.addElements([10,20,30]),60);
console.log("addElements works fine\n");

//________________________testing average()____________________________
checkAssert(lib.average.name,[],lib.average([]),0);
checkAssert(lib.average.name,[2,3,4],lib.average([2,3,4]),3);
checkAssert(lib.average.name,[0,1,2],lib.average([0,1,2]),1);
checkAssert(lib.average.name,[10,23,30],lib.average([10,23,30]),21);
console.log("average works fine\n");

//________________________testing splitEvenOdd()____________________________
checkAssert(lib.splitEvenOdd.name,[],lib.splitEvenOdd([]),{odd : [],even : []});
checkAssert(lib.splitEvenOdd.name,[2,3,4],lib.splitEvenOdd([2,3,4]),{odd:[3], even:[2,4]});
checkAssert(lib.splitEvenOdd.name,[0,1,0],lib.splitEvenOdd([0,1,0]),{odd : [1],even : [0,0]});
checkAssert(lib.splitEvenOdd.name,[9,1,3],lib.splitEvenOdd([9,1,3]),{odd : [9,1,3],even : []});
checkAssert(lib.splitEvenOdd.name,[12,13,21],lib.splitEvenOdd([12,13,21]),{odd : [13,21],even : [12]});
checkAssert(lib.splitEvenOdd.name,[10,20,30],lib.splitEvenOdd([10,20,30]),{odd : [],even : [10,20,30]});
console.log("splitEvenOdd works fine\n");

//________________________testing splitList()____________________________
checkAssert(lib.splitList.name,[],lib.splitList([],"odd"),[]);
checkAssert(lib.splitList.name,[2,3,4],lib.splitList([2,3,4],"odd"),[3]);
checkAssert(lib.splitList.name,[0,1,0],lib.splitList([0,1,0],"odd"),[1]);
checkAssert(lib.splitList.name,[9,1,3],lib.splitList([9,1,3],"odd"),[9,1,3]);
checkAssert(lib.splitList.name,[12,13,21],lib.splitList([12,13,21],"odd"),[13,21]);
checkAssert(lib.splitList.name,[10,20,30],lib.splitList([10,20,30],"odd"),[]);

checkAssert(lib.splitList.name,[],lib.splitList([],"even"),[]);
checkAssert(lib.splitList.name,[2,3,4],lib.splitList([2,3,4],"even"),[2,4]);
checkAssert(lib.splitList.name,[0,1,0],lib.splitList([0,1,0],"even"),[0,0]);
checkAssert(lib.splitList.name,[9,1,3],lib.splitList([9,1,3],"even"),[]);
checkAssert(lib.splitList.name,[12,13,21],lib.splitList([12,13,21],"even"),[12]);
checkAssert(lib.splitList.name,[10,20,30],lib.splitList([10,20,30],"even"),[10,20,30]);
console.log("splitList works fine\n");

//________________________testing findGreatest()____________________________
checkAssert(lib.findGreatest.name,[1,1],lib.findGreatest(1,1),1);
checkAssert(lib.findGreatest.name,[2,3],lib.findGreatest(2,3),3);
checkAssert(lib.findGreatest.name,[1,0],lib.findGreatest(1,0),1);
console.log("findGreatest works fine\n");

//________________________testing findSmallest()____________________________
checkAssert(lib.findSmallest.name,[1,1],lib.findSmallest(1,1),1);
checkAssert(lib.findSmallest.name,[2,3],lib.findSmallest(2,3),2);
checkAssert(lib.findSmallest.name,[1,0],lib.findSmallest(1,0),0);
console.log("findSmallest works fine\n");

//________________________testing findMin()____________________________
checkAssert(lib.findMin.name,[2,3,4,4],lib.findMin([2,3,4,4]),2);
checkAssert(lib.findMin.name,[0,1,0],lib.findMin([0,1,0]),0);
checkAssert(lib.findMin.name,[10,20,30],lib.findMin([10,20,30]),10);
console.log("findMin works fine\n");

//________________________testing findMax()____________________________
checkAssert(lib.findMax.name,[2,3,4,4],lib.findMax([2,3,4,4]),4);
checkAssert(lib.findMax.name,[0,1,0],lib.findMax([0,1,0]),1);
checkAssert(lib.findMax.name,[10,20,30],lib.findMax([10,20,30]),30);
console.log("findMax works fine\n");

//________________________testing reverse()____________________________
checkAssert(lib.reverse.name,[ ],lib.reverse([]),[]);
checkAssert(lib.reverse.name,[2,3,4,4],lib.reverse([2,3,4,4]),[4,4,3,2]);
checkAssert(lib.reverse.name,[0,1,0],lib.reverse([0,1,0]),[0,1,0]);
checkAssert(lib.reverse.name,[10,20,30],lib.reverse([10,20,30]),[30,20,10]);
console.log("reverse works fine\n");

//________________________testing merge()____________________________
checkAssert(lib.merge.name,[[],[]],lib.merge([],[]),[]);
checkAssert(lib.merge.name,[[2,3,4],[0,1]],lib.merge([2,3,4],[0,1]),[2,3,4,0,1]);
checkAssert(lib.merge.name,[[0,1,0],[2,3,4]],lib.merge([0,1,0],[2,3,4]),[0,1,0,2,3,4]);
checkAssert(lib.merge.name,[[10,20,30],[20,33,56,0,8]],lib.merge([10,20,30],[20,33,56,0,8]),[10,20,30,20,33,56,0,8]);
console.log("merge works fine\n");

//________________________testing findIndex()____________________________
checkAssert(lib.findIndex.name,[[],0],lib.findIndex([ ],0),-1);
checkAssert(lib.findIndex.name,[[2,3,4,4],4],lib.findIndex([2,3,4,4],4),2);
checkAssert(lib.findIndex.name,[[0,1,0],0],lib.findIndex([0,1,0],0),0);
checkAssert(lib.findIndex.name,[[10,20,30],12],lib.findIndex([10,20,30],12),-1);
console.log("findIndex works fine\n");

//________________________testing fibonacci()____________________________
checkAssert(lib.fibonacci.name,[9],lib.fibonacci(9),[0,1,1,2,3,5,8,13,21]);
checkAssert(lib.fibonacci.name,[1],lib.fibonacci(1),[0]);
checkAssert(lib.fibonacci.name,[5],lib.fibonacci(5),[0,1,1,2,3]);
checkAssert(lib.fibonacci.name,[0],lib.fibonacci(0),[]);
checkAssert(lib.fibonacci.name,[10],lib.fibonacci(2),[0,1]);
console.log("fibonacci works fine\n");

//________________________testing extractDigits()____________________________
checkAssert(lib.extractDigits.name,[123],lib.extractDigits(123),[1,2,3]);
checkAssert(lib.extractDigits.name,[23481],lib.extractDigits(23481),[2,3,4,8,1]);
checkAssert(lib.extractDigits.name,[0],lib.extractDigits(0),[0]);
checkAssert(lib.extractDigits.name,[09872],lib.extractDigits(09872),[9,8,7,2]);
console.log("extractDigits works fine\n");

//________________________testing countAboveThreshold()____________________________
checkAssert(lib.countAboveThreshold.name,[[ ],0],lib.countAboveThreshold([ ],0),0);
checkAssert(lib.countAboveThreshold.name,[[2,3,4],3],lib.countAboveThreshold([2,3,4],3),1);
checkAssert(lib.countAboveThreshold.name,[[0,1,0],1],lib.countAboveThreshold([0,1,0],1),0);
checkAssert(lib.countAboveThreshold.name,[[10,20,30],12],lib.countAboveThreshold([12,21,13],4),3);
console.log("countAboveThreshold works fine\n");

//________________________testing countBelowThreshold()____________________________
checkAssert(lib.countBelowThreshold.name,[[ ],0],lib.countBelowThreshold([ ],0),0);
checkAssert(lib.countBelowThreshold.name,[[2,3,4],3],lib.countBelowThreshold([2,3,4],3),2);
checkAssert(lib.countBelowThreshold.name,[[0,1,0],1],lib.countBelowThreshold([0,1,0],1),3);
checkAssert(lib.countBelowThreshold.name,[[10,20,30],12],lib.countBelowThreshold([12,21,13],4),0);
console.log("countBelowThreshold works fine\n");

//________________________testing extractSecondElements()____________________________
checkAssert(lib.extractSecondElements.name,[ ],lib.extractSecondElements([]),[]);
checkAssert(lib.extractSecondElements.name,[2,3,4,4],lib.extractSecondElements([2,3,4,4]),[3,4]);
checkAssert(lib.extractSecondElements.name,[0,1,0],lib.extractSecondElements([0,1,0]),[1]);
checkAssert(lib.extractSecondElements.name,[10,20,30],lib.extractSecondElements([10,20,30]),[20]);
console.log("extractSecondElements works fine\n");

//________________________testing mapLength()____________________________
checkAssert(lib.mapLength.name,[ ],lib.mapLength([]),[]);
checkAssert(lib.mapLength.name,["swagata","chakraborty"],lib.mapLength(["swagata","chakraborty"]),[7,11]);
checkAssert(lib.mapLength.name,["","2","abc"],lib.mapLength(["","2","abc"]),[0,1,3]);
checkAssert(lib.mapLength.name,["abcde","jj","lolopll"],lib.mapLength(["abcde","jj","lolopll"]),[5,2,7]);
console.log("mapLength works fine\n");

//________________________testing partition()____________________________
checkAssert(lib.partition.name,[[],2],lib.partition([],2),[[],[]]);
checkAssert(lib.partition.name,[[2,3,4],3],lib.partition([2,3,4],3),[[4],[2,3]]);
checkAssert(lib.partition.name,[[0,1,0],1],lib.partition([0,1,0],1),[[],[0,1,0]]);
checkAssert(lib.partition.name,[[9,1,3],9],lib.partition([9,1,3],9),[[],[9,1,3]]);
checkAssert(lib.partition.name,[[12,13,21],4],lib.partition([12,13,21],4),[[12,13,21],[]]);
console.log("partition works fine\n");

//________________________testing zip()____________________________
checkAssert(lib.zip.name,[[],[]],lib.zip([],[]),[]);
checkAssert(lib.zip.name,[[2,3],[4,4]],lib.zip([2,3],[4,4]),[[2,4],[3,4]]);
checkAssert(lib.zip.name,[[0,1,0],[2,5]],lib.zip([0,1,0],[2,5]),[[0,2],[1,5]]);
checkAssert(lib.zip.name,[[6,4],[10,20,30]],lib.zip([6,4],[10,20,30]),[[6,10],[4,20]]);
checkAssert(lib.zip.name,[[2,3,9],[4,0,4]],lib.zip([2,3,9],[4,0,4]),[[2,4],[3,0],[9,4]]);
console.log("zip works fine\n");

//________________________testing makeUnique()____________________________
checkAssert(lib.makeUnique.name,[ ],lib.makeUnique([]),[]);
checkAssert(lib.makeUnique.name,[2,2,3,4,4],lib.makeUnique([2,2,3,4,4]),[2,3,4]);
checkAssert(lib.makeUnique.name,[0,1,0],lib.makeUnique([0,1,0]),[1,0]);
checkAssert(lib.makeUnique.name,[10,20,30],lib.makeUnique([10,20,30]),[10,20,30]);
console.log("makeUnique works fine\n");

//________________________testing union()____________________________
checkAssert(lib.union.name,[[],[]],lib.union([],[]),[]);
checkAssert(lib.union.name,[[12,6],[]],lib.union([12,6],[]),[12,6]);
checkAssert(lib.union.name,[[2,2,3,4,4],[1,2,8]],lib.union([2,2,3,4,4],[1,2,8]),[3,4,1,2,8]);
checkAssert(lib.union.name,[[0,1,0],[4,8,34,10]],lib.union([0,1,0],[4,8,34,10]),[1,0,4,8,34,10]);
checkAssert(lib.union.name,[[10,20,30],[22,14,6]],lib.union([10,20,30],[22,14,6]),[10,20,30,22,14,6]);
console.log("union works fine\n");

//________________________testing intersection()____________________________
checkAssert(lib.intersection.name,[[],[]],lib.intersection([],[]),[]);
checkAssert(lib.intersection.name,[[12,6],[]],lib.intersection([12,6],[]),[]);
checkAssert(lib.intersection.name,[[2,2,3,4,4],[1,2,8]],lib.intersection([2,2,3,4,4],[1,2,8]),[2]);
checkAssert(lib.intersection.name,[[0,1,0],[4,8,34,10]],lib.intersection([0,1,0],[4,8,34,10]),[]);
checkAssert(lib.intersection.name,[[10,20,30],[20,20,30,12]],lib.intersection([10,20,30],[20,20,30,12]),[20,30]);
console.log("intersection works fine\n");

//________________________testing difference()____________________________
checkAssert(lib.difference.name,[[],[]],lib.difference([],[]),[]);
checkAssert(lib.difference.name,[[12,6],[]],lib.difference([12,6],[]),[12,6]);
checkAssert(lib.difference.name,[[2,2,3,4,4],[1,2,8]],lib.difference([2,2,3,4,4],[1,2,8]),[3,4]);
checkAssert(lib.difference.name,[[0,1,0],[4,8,34,10]],lib.difference([0,1,0],[4,8,34,10]),[1,0]);
checkAssert(lib.difference.name,[[10,20,30],[20,20,30,12]],lib.difference([10,20,30],[20,20,30,12]),[10]);
console.log("difference works fine\n");

//________________________testing isSubset()____________________________
checkAssert(lib.isSubset.name,[[],[]],lib.isSubset([],[]),true);
checkAssert(lib.isSubset.name,[[1,2,3],[2,3,5]],lib.isSubset([1,2,3],[2,3,5]),false);
checkAssert(lib.isSubset.name,[[2,7,3],[2,3,7,1]],lib.isSubset([2,7,3],[2,3,7,1]),false);
checkAssert(lib.isSubset.name,[[1,29,6],[29,1]],lib.isSubset([1,29,6],[29,1]),true);
checkAssert(lib.isSubset.name,[[1,5,6],[]],lib.isSubset([1,5,6],[]),true);
console.log("isSubset works fine\n");

//________________________testing rotate()____________________________
checkAssert(lib.rotate.name,[[ ],0],lib.rotate([ ],0),[]);
checkAssert(lib.rotate.name,[[2,3,4],3],lib.rotate([2,3,4],3),[2,3,4]);
checkAssert(lib.rotate.name,[[0,1,0],1],lib.rotate([0,1,0],1),[0,0,1]);
checkAssert(lib.rotate.name,[[12,21,13],4],lib.rotate([12,21,13],4),[13,12,21]);
checkAssert(lib.rotate.name,[[2,2,9,8,4,12,3,4],3],lib.rotate([2,2,9,8,4,12,3,4],3),[12,3,4,2,2,9,8,4]);
checkAssert(lib.rotate.name,[[0,1,0,1,2,3],6],lib.rotate([0,1,0,1,2,3],6),[0,1,0,1,2,3]);
console.log("rotate works fine\n");

//________________________testing sortAscending()____________________________
checkAssert(lib.sortAscending.name,[ ],lib.sortAscending([]),[]," sortAscending()");
//checkAssert(lib.sortAscending.name,[2,2,3,4,4],lib.sortAscending([7,2,0,4,4]),[0,2,4,4,7]);
//checkAssert(lib.sortAscending.name,[0,1,0],lib.sortAscending([0,1,0]),[0,0,1];
checkAssert(lib.sortAscending.name,[10,20,30],lib.sortAscending([10,20,30]),[10,20,30]);
console.log("sortAscending works fine\n");

//________________________testing sortDescending()____________________________
checkAssert(lib.sortDescending.name,[ ],lib.sortDescending([]),[]);
//checkAssert(lib.sortDescending.name,[2,2,3,4,4],lib.sortDescending([7,2,0,4,4]),[2,3,4]);
//checkAssert(lib.sortDescending.name,[0,1,0],lib.sortDescending([0,1,0]),[0,1]);
checkAssert(lib.sortDescending.name,[10,20,30],lib.sortDescending([10,20,30]),[30,20,10]);
checkAssert(lib.sortDescending.name,[30,20,10],lib.sortDescending([30,20,10]),[30,20,10]);
console.log("sortDescending works fine\n");

//________________________testing isAscending()____________________________
checkAssert(lib.isAscending.name,[ ],lib.isAscending([]),true);
//checkAssert(lib.isAscending.name,[2,2,3,4,4],lib.isAscending([7,2,0,4,4]),false);
//checkAssert(lib.isAscending.name,[0,1,0],lib.isAscending([0,1,0]),false);
checkAssert(lib.isAscending.name,[10,20,30],lib.isAscending([10,20,30]),true);
checkAssert(lib.isAscending.name,[30,20,10],lib.isAscending([30,20,10]),false);
console.log("isAscending works fine\n");

//________________________testing isDescending()____________________________
checkAssert(lib.isDescending.name,[ ],lib.isDescending([]),true);
//checkAssert(lib.isDescending.name,[2,2,3,4,4],lib.isDescending([7,2,0,4,4]),false);
//checkAssert(lib.isDescending.name,[0,1,0],lib.isDescending([0,1,0]),false);
checkAssert(lib.isDescending.name,[10,20,30],lib.isDescending([10,20,30]),false);
checkAssert(lib.isDescending.name,[30,20,10],lib.isDescending([30,20,10]),true);
console.log("isDescending works fine\n");

