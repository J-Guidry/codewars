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
  let copyArr = numArr.slice(0);
  console.log(numArr);
  let dashIndices = [];

  for (let i = 0; i < numArr.length; i++) {
    //     console.log(numArr[i]);
    if (i === numArr.length - 1) break;
    let number = numArr[i];
    let nextNum = numArr[i + 1];
    if (number % 2 === 1 && number >= 0 && nextNum % 2 === 1) {
      console.log(
        `at index ${i}, this number, ${number}, is odd and next number after is also odd. this means that a dash should be inserted after this number and index`
      );
      //copyArr.splice(i, 0, "-");
      dashIndices.push(i);
    }
  }

  const arrGroup = [];
  for (let i = 0; i < dashIndices.length; i++) {
    if (i === 0) {
      let part = numArr.slice(0, dashIndices[i]);
      arrGroup.push(part);
    } else {
      let part = numArr.slice(dashIndices[i]);
      arrGroup.push(part);
    }
    //if i is 0, slice starts at 0, if i is more than 1,
  }
  console.log(arrGroup);
  //return copyArr; //.join('');
}

insertDash(454793);
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
