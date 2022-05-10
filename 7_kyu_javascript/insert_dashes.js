/* 
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

*/

function insertDash(num) {
  //code me
  let numStr = "" + num + "";
  let numArr = numStr.split("");
  let dashIndices = [];

  for (let i = 0; i < numArr.length; i++) {
    let number = parseInt(numArr[i]);
    console.log(number);
    if (
      (number % 2 === 1 && number !== 0 && parseInt(numArr[i + 1]) % 2 === 1) ||
      (i === numArr.length && parseInt(numArr[i - 1]))
    ) {
      console.log(i, number);
      dashIndices.push(i);
    }
  }

  //     let newArr;
  //   dashIndices.forEach(index => {

  //     newArr = numArr.splice(index,0,"-");
  //   });
  //return newArr.join('');
}
/*
 no regex
 find two odd digits with array
 change string to array
 change each string to number
 
 loop through string
 use modulo to compare even/odd converting to number
 */
