/**
 * LeetCode 461. Hamming Distance
 * https://leetcode.com/problems/hamming-distance/
 *
 * The Hamming distance between two integers is the number of positions at
 * which the corresponding bits are different.
 *
 * Given two integers x and y, return the Hamming distance between them.
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
  let xor = x ^ y;

  let count = 0;

  while (xor > 0) {
    count += xor & 1;
    xor >>= 1;
  }

  return count;
}

module.exports = { hammingDistance };
