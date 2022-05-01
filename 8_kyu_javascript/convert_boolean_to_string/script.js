function booleanToString(b) {
  //your code here
  let string;
  if (b === true) {
    string = "true";
  } else {
    string = "false";
  }
  return string;
}

console.log(booleanToString(true));
console.log(booleanToString(false));
