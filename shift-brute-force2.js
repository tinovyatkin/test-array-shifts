"use strict";

// when selected by CLI will output this banner
if (module.parent) {
  if (module.parent.filename.endsWith("cli.js")) {
    console.info("------------------------------");
    console.info(`
  Brute force variant 2
  Like brute-force1, but we will assume that one shift must merge all available pairs
  So, array without pairs is not changed on shift
 
  BigO: худшим случаем при таких условиях будет являться массив одинаковых чисел - [2,2,2,2,2,2....]
  в этом случае будет O(n*log(n))
`);
  }
} else {
  if (process.argv.length > 2) {
    const numbers = process.argv.slice(2).map((n) => parseInt(n, 10));
    console.info(
      "Array %o minimizes in %d shift(s)",
      numbers,
      countShifts(numbers)
    );
  }
}

/*
 * @param {number[]} arr
 * @param {number} [shiftsCount=0]
 */
function countShifts(arr, shiftsCount = 0) {
  console.log(arr);
  if (arr.length < 2) return shiftsCount;

  // creating new array by copying values from existing and replacing pairs
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      res.push(arr[i] << 1); // it will sum it twice, see README
      i++;
    } else res.push(arr[i]);
  }
  if (res.length !== arr.length) return countShifts(res, shiftsCount + 1);
  return shiftsCount;
}
module.exports = countShifts;
