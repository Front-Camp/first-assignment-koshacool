/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  let index;
  let val = arr.find(( val, i) => {
    if (val + arr[i + 1] == base) {
      index = i;
      return true
    }
      return false;
  })

  if (index !== undefined) {
    return [val, arr[index + 1]];
  }

  for (let k = 0; k < arr.length; k++) {
    for (let j = k + 1; j <= arr.length; j++) {
      console.log(k, j)
         if (arr[k] + arr[j] == base) {
           return [arr[k], arr[j]]
         }
      }
  }


};

export default twoSums;
