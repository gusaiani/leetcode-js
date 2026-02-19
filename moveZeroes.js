/**
 * LeetCode 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * Given an integer array nums, move all 0's to the end of it while maintaining
 * the relative order of the non-zero elements.
 *
 * Note that you must do this in-place without making a copy of the array.
 */

/**
 * @param {number[]} nums
 * @return {void}
 */
function moveZeroes(nums) {
  if (nums.length === 1) return nums;

  let latestPositivePosition = -1;

  for (let index = 0; index < nums.length; index++) {
    if (index === 0) {
      if (nums[index] !== 0) {
        latestPositivePosition = 0;
      }
    } else if (nums[index] !== 0) {
      const previousNumber = nums[index - 1];
      nums[latestPositivePosition + 1] = nums[index];

      if (previousNumber === 0) {
        nums[index] = 0;
      }
      latestPositivePosition++;
    }
  }

  return nums;
}

module.exports = { moveZeroes };
