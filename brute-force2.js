/**
 * Brute force variant 2
 * Like brute-force1, but we will assume that one shift must merge all available pairs
 * So, array without pairs is not changed on shift
 *
 * BigO: худшим случаем при таких условиях будет являться массив одинаковых чисел - [2,2,2,2,2,2....]
 * в этом случае будет O(n^2)
 *
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
      res.push(arr[i] * 2);
      i++;
    } else res.push(arr[i]);
  }
  if (res.length !== arr.length)
    return countShifts(res, shiftsCount + arr.length - res.length);
  return shiftsCount;
}
module.exports = countShifts;
