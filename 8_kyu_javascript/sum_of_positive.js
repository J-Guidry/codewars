/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
  if (arr.length === 0 || (arr.length === 1 && arr[0] === -1)) return 0;
  return arr.reduce((accumulator, current) => {
    if (current >= 0) {
      return accumulator + current;
    } else {
      return accumulator;
    }
  }, 0);
}

positiveSum([1, 2, 3, 4, 5]); // 15
positiveSum([1, -2, 3, 4, 5]); // 13
positiveSum([-1, -2, -3, -4, -5]); // 0
