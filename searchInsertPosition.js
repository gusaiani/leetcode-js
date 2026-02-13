/**
 * LeetCode 35. Search Insert Position
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * Given a sorted array of distinct integers and a target value, return the
 * index if the target is found. If not, return the index where it would be
 * inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Constraints:
 *  - 1 <= nums.length <= 10^4
 *  - -10^4 <= nums[i] <= 10^4
 *  - nums contains distinct values sorted in ascending order
 *  - -10^4 <= target <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}

module.exports = { searchInsert };