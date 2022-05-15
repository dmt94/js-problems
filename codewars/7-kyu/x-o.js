/*
Check to see if a string has the same amount of 'x's and 'o's.

The method must return a boolean and be case insensitive.

The string can contain any char.
*/

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  str.toLowerCase().split('').forEach(char => {
    if (char === 'x') {
      xCount += 1;
    } else if (char === 'o') {
      oCount += 1;
    } 
  });
  return xCount === oCount;
}

console.log(XO("ooxx"));
console.log(XO("xooxx"));