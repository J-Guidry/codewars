function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let total = 0;
  for (let i = 0; i < classPoints.length; i++) {
    total += classPoints[i];
    console.log(total);
  }
  let avg = total / classPoints.length;
  if (yourPoints > avg) {
    return true;
  } else {
    return false;
  }
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));
