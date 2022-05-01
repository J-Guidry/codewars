function basicOp(operation, value1, value2) {
  // Code
  let result;
  if (operation == "+") {
    result = value1 + value2;
  } else if (operation == "-") {
    result = value1 - value2;
  } else if (operation == "*") {
    result = value1 * value2;
  } else if (operation == "/") {
    result = value1 / value2;
  }

  return result;
}

console.log("Basic tests\n");
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
