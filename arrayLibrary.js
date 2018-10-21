const isEven = function(value) {
  return (value % 2 == 0) ;
}
exports.isEven = isEven;

const add = function(list) {
 return list.reduce(function(num1,num2){return num1+num2},0);
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

const categorizeElement = function(splitObject,element){
  if(isEven(element)) { 
    splitObject["even"].push(element); 
    return splitObject; 
  }
  splitObject["odd"].push(element);
  return splitObject;
}

const splitEvenOddList  = function(list) {
  return list.reduce(categorizeElement, {even:[],odd:[]});
}
exports.splitEvenOddList = splitEvenOddList;

const splitList = function(list,requireListType) {
  let splitList = splitEvenOddList(list);
  return splitList[requireListType];
}
exports.splitList = splitList;

const returnGreatest = function(value1,value2) {
  if(value1>value2) {
    return value1;
  }
  return value2;
}
exports.returnGreatest = returnGreatest;

const returnSmallest = function(value1,value2) {
  if(value1<value2) {
    return value1;
  }
  return value2;
}
exports.returnSmallest = returnSmallest;

const findMax = function(list) {
  return list.reduce(returnGreatest,0);
}
exports.findMax = findMax;

const findMin = function(list) {
  let min = findMax(list);
  return list.reduce(returnSmallest,min);
}
exports.findMin = findMin;

const merge = function(list1, list2) {
  return list1.concat(list2);
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

const partByValue = function(threshold) {
  return function(list, element) {
    if(element > threshold) {
      list[0].push(element);
      return list;
    }
    list[1].push(element);
    return list;
  }
}

const partition = function(list, threshold) {
  let partByThreshold = partByValue(threshold);
  return list.reduce(partByThreshold,[[],[]]);
}
exports.partition = partition;

const countAboveThreshold = function(list, threshold) {
  return partition(list, threshold)[0].length ;
}
exports.countAboveThreshold = countAboveThreshold;

const countBelowThreshold = function(list, threshold){
  return partition(list, threshold)[1].length ;
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
  return list.reduce( function(mapedList,element){
    mapedList.push(element.length);
    return mapedList;
  },[]);
}
exports.mapLengths = mapLengths;

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

const operationOnLists = function(list1,list2) {
  let commonElements = [];
  let difference = [];
  for(element of list1) {
    let index = findIndex(list2,element);
    if(index != -1) {
      commonElements.push(element);
    }
    if(index == -1) {
      difference.push(element);
    }
  }
  let operationOnLists = {
  "intersection" : makeUnique(commonElements),
  "difference" : makeUnique(difference)
  };
  return operationOnLists;
}
exports.operationOnLists = operationOnLists;

const intersection = function(list1,list2) {
  return operationOnLists(list1,list2)["intersection"];
}
exports.intersection = intersection;

const difference = function(list1,list2) {
  return operationOnLists(list1,list2)["difference"];
}
exports.difference = difference;

const isSubset = function(list1,list2) {
  for(element of list2) { 
    if(findIndex(list1,element) == -1) {
      return false;
    }
  }
  return true;
}
exports.isSubset = isSubset;

const rotate = function(list,shift) {
  let len = list.length;
  let rotateList = [];
  for (let index in list) {
    let rotateIndex = (+index + +shift) % len;
    rotateList[ rotateIndex ] = list[ index ];
  }
  return rotateList;
}
exports.rotate = rotate;

const sortAscending = function(list) {
  let ascendingList = [];
  let min = findMin(list) - 1;
  for(let element in list) {
    let subList = partition(list,min)[0];
    min = findMin(subList);
    ascendingList.push(min);
  }
  return ascendingList;
}
exports.sortAscending = sortAscending;

const sortDescending  = function(list) {
  let descendingList = sortAscending(list);
  return reverse(descendingList);
}
exports.sortDescending = sortDescending;

const isAscending = function(list) {
  let ascendingList = sortAscending(list);
  if(list.toString() == ascendingList.toString()) {
    return true;
  }
  return false;
}
exports.isAscending = isAscending;

const isDescending = function(list) {
  let ascendingList = sortDescending(list);
  if(list.toString() == ascendingList.toString()) {
    return true;
  }
  return false;
}
exports.isDescending = isDescending;
