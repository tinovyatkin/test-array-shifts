"use strict";

// when selected by CLI will output this banner
if (module.parent && module.parent.filename.endsWith("cli.js")) {
  console.info("------------------------------");
  console.info(`
  Brute force variant 1
  See 1 from README - each shift merges only first available pair and array is not rolling over ends
  So, array without pairs is not changed on shift
 
  BigO: худшим случаем при таких условиях будет являться полностью сливающийся из центра массив - [128, 32, 8, 4, 4, 16, 64, 256]
  в этом случае будет O(n^2)
`);
}

/**

 * @param {number[]} arr
 * @param {number} [shiftsCount=0]
 */
function countShifts(arr, shiftsCount = 0) {
  console.log(arr);
  if (arr.length < 2) return shiftsCount;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      // copy and splice array
      const copy = [...arr];
      copy.splice(i, 2, arr[i] + arr[i]);
      return countShifts(copy, shiftsCount + 1);
    }
  }
  return shiftsCount;
}
module.exports = countShifts;
