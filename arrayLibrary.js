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
