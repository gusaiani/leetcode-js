/**
 * LeetCode 448. Find All Numbers Disappeared in an Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 *
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear
 * in nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
  const set = new Set(Array.from({ length: nums.length }, (_, i) => i + 1));

  for (let i = 0; i < nums.length; i++) {
    set.delete(nums[i]);
  }

  return [...set];
}

module.exports = { findDisappearedNumbers };
