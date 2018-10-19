const isEven = function(value) {
  return (value % 2 == 0) ;
}
exports.isEven = isEven;

const add = function(inputList) {
  let sum = 0;
  for(element of inputList) {
   sum += element;
  }
  return sum;
}
exports.add = add;

const splitEvenOddList  = function(inputList) {
  let oddList = []; 
  let evenList = [];
  let evenOddList = {even :[], odd:[]};
  for(element of inputList) {
    if(!isEven(element)) {
      oddList.push(element);
    }
    if(isEven(element)) {
      evenList.push(element);
    }
  }
  return { odd : oddList, even : evenList};
}
exports.splitEvenOddList = splitEvenOddList;

const splitList = function(list,requireListType) {
  let splitList = splitEvenOddList(list);
  return splitList[requireListType];
}
exports.splitList = splitList;

const findMax = function(inputList) {
  let max = 0;
  for( element of inputList ) {
    if(max < element ) {
      max = element;
    }
  }
  return max;
}
exports.findMax = findMax;

const findMin = function(inputList) {
  let min = findMax(inputList);
  for( element of inputList ) {
    if(min > element ) {
      min = element;
    }
  }
  return min;
}
exports.findMin = findMin;

//const merge = function(inputList1, inputList2) {
//  let mergeList = [];
//  for(element of inputList1) {
//  }
//}

const reverse = function(inputList) {
  let rev = [];
  for( element of inputList ) {
    rev.unshift(element);
  }
  return rev;
}
exports.reverse = reverse;
