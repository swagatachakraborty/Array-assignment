const isEven = function(value) {
  return (value % 2 == 0) ;
}
exports.isEven = isEven;

const add = function(array) {
  let sum = 0;
  for(element of array) {
   sum += element;
  }
  return sum;
}
exports.add = add;

const splitEvenOddList  = function(array) {
  let oddList = []; 
  let evenList = [];
  let evenOddList = {even :[], odd:[]};
  for(element of array) {
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
