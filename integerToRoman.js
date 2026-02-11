/**
 * LeetCode 12. Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/description/
 *
 * Seven different symbols represent Roman numerals:
 *   I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
 *
 * Additionally, subtractive notation is used:
 *   IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900
 *
 * Given an integer, convert it to a Roman numeral.
 *
 * Constraints: 1 <= num <= 3999
 */

const values =  [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i]
    }
  }

  return result;
}

module.exports = { intToRoman };
