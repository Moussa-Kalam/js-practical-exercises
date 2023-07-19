/*
 Implement a function called arrayStats that returns an
 object containing various statistics about the array 
*/

function arrStats(arr) {
  const obj = {};

  // Get the sum of all numbers in the array
  obj.sum = arr.reduce((a, b) => a + b);

  // Get the average of all numbers in the array rounded to two decimal places
  obj.average = (obj.sum / arr.length).toFixed(2);

  // Get the minimum value in the array
  obj.min = Math.min(...arr);

  // Get the maximum value in the array.
  obj.max = Math.max(...arr);

  return obj;
}

console.log(arrStats([1, 2, 3, 4, 5]));
