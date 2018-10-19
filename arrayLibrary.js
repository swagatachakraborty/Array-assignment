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

const filterByThreshold = function(inputList, threshold) {
  let above = {list : [],count : 0};
  let below = {list : [],count : 0};
  for(element of inputList) {
    if(element > threshold) {
      above.list.push(element);
      above.count++;
    }

    if(element <= threshold) {
      below.list.push(element);
      below.count++;
    }
  }
  return { above : above, below : below };
}
exports.filterByThreshold = filterByThreshold;

const countAboveThreshold = function(list, threshold) {
  return filterByThreshold(list, threshold).above.count ;
}
exports.countAboveThreshold = countAboveThreshold;

const countBelowThreshold = function(list, threshold){
  return filterByThreshold(list, threshold).below.count ;
}
exports.countBelowThreshold = countBelowThreshold;

const extractSecondElements = function(list) {
  let listOfSecondElements = [];
  for(let count = 1; count < list.length; count+=2) {
    listOfSecondElements.push(list[count]);
  }
  return listOfSecondElements;
}
exports.extractSecondElements = extractSecondElements;

const mapLengths = function(list) {
  let mappedList = [];
  for(element of list) {
    mappedList.push(element.length);
  }
  return mappedList;
}
exports.mapLengths = mapLengths;

const partition = function(list,threshold) {
  let partitionList = [];
  partitionList.push(filterByThreshold(list,threshold).above.list);
  partitionList.push(filterByThreshold(list,threshold).below.list);
  return partitionList;
}
exports.partition = partition;

const zip = function(list1, list2) {
  let count = 0;
  let totalZips = findMin([list1.length, list2.length]);
  let zipList = [];
  while(count < totalZips) {
    let list = [];
    list.push(list1[count]);
    list.push(list2[count]);
    zipList.push(list);
    count++;
  }
  return zipList;
}
exports.zip = zip;

const makeUnique = function(list) {
  let uniqList = [];
  for(let element of list) {
    if(findIndex(uniqList, element) == -1) {
      uniqList.push(element);
    }
  }
  return uniqList;
}
exports.makeUnique = makeUnique;

const union = function(list1,list2) {
  let margeArray = merge(list1,list2);
  return makeUnique(margeArray);
}
exports.union = union;
