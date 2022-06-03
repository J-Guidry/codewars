/* 
Given a mixed array of number and string representations of integers, 
add up the string integers and subtract this from the total of the non-string integers.

Return as a number.

*/

function divCon(x) {
  if (x.length === 0) return 0;

  let arrNum = x.filter((num) => typeof num === "number");
  let arrStr = x.filter((num) => typeof num === "string");
  console.log(arrNum.length, arrStr.length);
  let arrNumSum;
  if (arrNum.length !== 0) {
    arrNumSum = arrNum.reduce((accu, current) => accu + current);
  }

  if (arrStr.length === 0) {
    return arrNumSum;
  }

  let arrStrSum = arrStr.reduce(
    (accu, current) => Number.parseInt(accu) + Number.parseInt(current)
  );
  if (arrNum.length === 0) {
    return -1 * arrStrSum;
  }
  return arrNumSum - arrStrSum;
}

console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7])); // 14); )
