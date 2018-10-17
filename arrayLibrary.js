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

