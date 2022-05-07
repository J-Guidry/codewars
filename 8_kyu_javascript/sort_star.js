/* 
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, 
    and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

function twoSort(s) {
  let sorted = s.sort();
  let first = sorted[0];
  let result = "";
  for (let i = 0; i < first.length; i++) {
    if (i === first.length - 1) {
      result += first[i];
      return result;
    } else {
      result += first[i] + "***";
    }
  }
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ])
);
