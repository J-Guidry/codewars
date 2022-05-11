/*
A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true

*/

// function isAllPossibilities(x) {
//   for (let i = 0; i < x.length; i++) {
//     if (x.includes(i) === false) {
//       return false;
//     }
//   }
//   return true;
// }
function isAllPossibilities(x) {
  let binaryArr = [];
  for (let i = 0; i < x.length; i++) {
    if (x.includes(i) === true) {
      binaryArr.push(true);
      //return false;
    } else {
      binaryArr.push(false);
    }
    //if(i === x.length && i )
  }
  console.log(binaryArr);
  let results = binaryArr.includes(false) === true ? false : true;
  return results;
  //return true;
}
