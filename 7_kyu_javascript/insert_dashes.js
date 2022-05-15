/* 
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) 
that will insert dashes ('-') between each two odd digits in num. For example:
 if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

*/

function insertDash(num) {
  //code me
  let numStr = "" + num + "";
  let numArr = numStr.split("");
  numArr = numArr.map((strNum) => parseInt(strNum));
  let copyArr = numArr;
  console.log(numArr);
  //let dashIndices = [];

  for (let i = 0; i < numArr.length; i++) {
    //     console.log(numArr[i]);
    if (i === numArr.length - 1) break;
    let number = numArr[i];
    let nextNum = numArr[i + 1];
    if (number % 2 === 1 && number >= 0 && nextNum % 2 === 1) {
      console.log(i, number);
      copyArr.splice(i, 0, "-");
      //dashIndices.push(i);
    }
  }
  return copyArr; //.join('');
}
/*
P.R.E.P.
Parameters - a big number
Return - a string number with dashhes inserted between each two odd digits not counting zero
Example -  
- (454793),'4547-9-3'
- (123456),'123456'
- (1003567),'1003-567'
Pseudo Code - 
 no regex
 find two odd digits with array
 change number to string
 change string to array
 change each string to number with map
 loop through array of strings
   conditional: use modulo to compare even/odd. if last index, then dont insert dash.,make sure number is non negative 
   
   
*/
