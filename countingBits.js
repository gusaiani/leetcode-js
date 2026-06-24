/**
 * LeetCode 338. Counting Bits
 * https://leetcode.com/problems/counting-bits/
 *
 * Given an integer n, return an array ans of length n + 1 such that for each
 * i (0 <= i <= n), ans[i] is the number of 1's in the binary representation
 * of i.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
  const answer = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    answer[i] = answer[i >> 1] + (i & 1);
  }

  return answer;
}

module.exports = { countBits };
