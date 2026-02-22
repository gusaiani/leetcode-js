/**
 * LeetCode 136. Single Number
 * https://leetcode.com/problems/single-number/description/
 *
 * Given a non-empty array of integers nums, every element appears twice except
 * for one. Find that single one.
 *
 * You must implement a solution with linear runtime complexity and use only
 * constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let result = 0;

  for (const num of nums) {
    result ^= num; // Bitwise XOR assignment
  }

  return result;
};
/*
function singleNumberSlow(nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  const [firstValue] = set;

  return firstValue;
}
*/

module.exports = { singleNumber };
