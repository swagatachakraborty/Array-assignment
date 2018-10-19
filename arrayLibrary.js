const isEven = function(value) {
  return (value % 2 == 0) ;
}
exports.isEven = isEven;

const add = function(list) {
  let sum = 0;
  for(element of list) {
   sum += element;
  }
  return sum;
}
exports.add = add;
 
const average = function(list) {
  let sum = add(list);
  let avg = 0;
  if(list.length) {
    return sum/list.length;
  }
  return avg;
}
exports.average = average;

const splitEvenOddList  = function(list) {
  let oddList = []; 
  let evenList = [];
  let evenOddList = {even :[], odd:[]};
  for(element of list) {
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

const findMax = function(list) {
  let max = 0;
  for( element of list ) {
    if(max < element ) {
      max = element;
    }
  }
  return max;
}
exports.findMax = findMax;

const findMin = function(list) {
  let min = findMax(list);
  for( element of list ) {
    if(min > element ) {
      min = element;
    }
  }
  return min;
}
exports.findMin = findMin;

const merge = function(list1, list2) {
  let mergeList = [];
  for(element of list1) {
    mergeList.push(element);
  }
  for(element of list2) {
    mergeList.push(element);
  }
  return mergeList;
}
exports.merge = merge;

const reverse = function(list) {
  let rev = [];
  for( element of list ) {
    rev.unshift(element);
  }
  return rev;
}
exports.reverse = reverse;

const findIndex = function(list, searchElement) {
  for(index in list) {
    if(searchElement == list[index]) {
      return index;
    }
  }
  return -1;
}
exports.findIndex = findIndex;

const findNthElement = function(list, requiredIndex) {
  for(index in list) {
    if(index == requiredIndex) {
      return list[index];
    }
  }
  return -1;
}
exports.findNthElement = findNthElement;

const fibonacci = function(range) {
  let prevTerm = 0;
  let presentTerm = 1;
  let fibo = [];
  for(let count = 0; count < range; count++) {
    fibo.push(prevTerm);
    let nextTerm = presentTerm + prevTerm ;
    prevTerm = presentTerm;
    presentTerm = nextTerm;
  }
  return fibo;
}
exports.fibonacci = fibonacci;

const extractDigits = function(number) {
  let digitsArray = [];
  while(number % 10) {
    digitsArray.unshift(number % 10);
    number = parseInt(number / 10);
  }
  return digitsArray;
}
exports.extractDigits = extractDigits;

//const countNum  = function() {
//
//}
