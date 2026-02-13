/**
 * LeetCode 66. Plus One
 * https://leetcode.com/problems/plus-one/description/
 *
 * You are given a large integer represented as an integer array digits,
 * where each digits[i] is the ith digit of the integer. The digits are
 * ordered from most significant to least significant in left-to-right order.
 * The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Constraints:
 *  - 1 <= digits.length <= 100
 *  - 0 <= digits[i] <= 9
 *  - digits does not contain any leading 0's
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let index = digits.length - 1;
  const canAdd = true;

  while (canAdd) {
    const digit = digits[index];
    const newDigit = digit + 1;

    if (newDigit < 10) {
      digits[index] = newDigit;
      return digits;
    } else {
      digits[index] = 0;
      if (index === 0) {
        return [1, ...digits];
      }
    }

    index--;
  }
}

module.exports = { plusOne };
