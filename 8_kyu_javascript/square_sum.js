/*
Complete the square sum function so that it squares each number passed into it 
and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/
function squareSum(numbers) {
  let sum = numbers.reduce((prevNum, currentNum) => {
    return prevNum + currentNum ** 2;
  }, 0);
  return sum;
}

/* 
  P.R.E.P.
    Parameters - an arary of numbers. array can be empty.
    Return - a number. each number in the array squared and summed
    Example -  
      squareSum([1,2]) - 5
      squareSum([0, 3, 4, 5]) - 50
      squareSum([]) - 0
    Pseudo Code - 
      loop through array
        square each number in there
        accumulate number after squaring
      return the sum
  */
