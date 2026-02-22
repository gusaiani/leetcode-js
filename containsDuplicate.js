/**
 * LeetCode 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  const counts = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (counts.has(nums[i])) {
      return true;
    } else {
      counts.add(nums[i]);
    }
  }

  return false;
}

module.exports = { containsDuplicate };
