const isEven = function(value) {
  return (value % 2 == 0) ;
}
exports.isEven = isEven;

const add = function(first,second) {
  return first+second;
}

const addElements = function(list) {
  return list.reduce(add,0);
}
exports.addElements = addElements;
 
const average = function(list) {
  let sum = addElements(list);
  if(list.length) {
    return sum/list.length;
  }
  return 0;
}
exports.average = average;

const categorizeNumber = function(splittedNumbers,element){
  if(isEven(element)) { 
    splittedNumbers["even"].push(element); 
    return splittedNumbers; 
  }
  splittedNumbers["odd"].push(element);
  return splittedNumbers;
}

const splitEvenOdd  = function(list) {
  return list.reduce(categorizeNumber, {even:[],odd:[]});
}
exports.splitEvenOdd = splitEvenOdd;

const splitList = function(list,requireListType) {
  let splitList = splitEvenOdd(list);
  return splitList[requireListType];
}
exports.splitList = splitList;

const findGreatest = function(value1,value2) {
  return Math.max(value1,value2);
}
exports.findGreatest = findGreatest;

const findSmallest = function(value1,value2) {
  return Math.min(value1,value2);
}
exports.findSmallest = findSmallest;

const findMax = function(list) {
  return list.reduce(findGreatest,list[0]);
}
exports.findMax = findMax;

const findMin = function(list) {
  return list.reduce(findSmallest,list[0]);
}
exports.findMin = findMin;

const merge = function(list1, list2) {
  return list1.concat(list2);
}
exports.merge = merge;

const insertAtBeginning = function(list,element) {
  list.unshift(element);
  return list;
}

const reverse = function(list) {
  return list.reduce(insertAtBeginning,[]);
}
exports.reverse = reverse;

const findIndex = function(list, searchElement) {
  return list.indexOf(searchElement);
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
  let series = [];
  for(let count = 0; count < range; count++) {
    series.push(prevTerm);
    let nextTerm = presentTerm + prevTerm ;
    prevTerm = presentTerm;
    presentTerm = nextTerm;
  }
  return series;
}
exports.fibonacci = fibonacci;

const extractDigits = function(number) {
  return number.toString().split("");
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

const insertEvenIndexValues = function(object,element) {
  if(object.index % 2 == 0){
    object.list.push(element);
  }
  object.index++;
  return object;
}

const extractSecondElements = function(list) {
  return list.reduce(insertEvenIndexValues,{index:1, list:[]}).list;
}
exports.extractSecondElements = extractSecondElements;

const findLength = function(element){
  if(!element) return 0;
  return element.length;
}

const mapLength = function(list) {
  return list.map(findLength);
}
exports.mapLength = mapLength;

const zipWith  = function(list) {
  let index = 0;
  return function(zippedList,element) {
    let zip = [];
    zip.push(element,list[index]);
    index++;
    if(!zip.includes(undefined)){
      zippedList.push(zip);
    }
    return zippedList;
  }
}

const zip = function(list1, list2) {
  let zipWithList2 = zipWith(list2);
  return list1.reduce(zipWithList2,[]) ;
}
exports.zip = zip;

const insertIfNotPresent = function(list,element) {
  if(!list.includes(element)){
    list.push(element);
  }
  return list;
}

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
  let mergeList = merge(list1,list2);
  return makeUnique(mergeList);
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
