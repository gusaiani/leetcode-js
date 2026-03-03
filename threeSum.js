/**
 * LeetCode 15. 3Sum
 * https://leetcode.com/problems/3sum/
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * The solution set must not contain duplicate triplets.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const results = [];

  // 1. Sort the array numerically
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // Optimization: If the current number is > 0, the sum of
    // three positive numbers can never be 0.
    if (nums[i] > 0) break;

    // 2. Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);

        // 3. Skip duplicates for the second and third elements
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move both pointers after finding a match
        left++;
        right--;
      } else if (sum < 0) {
        // Sum is too low, move left pointer to a larger number
        left++;
      } else {
        // Sum is too high, move right pointer to a smaller number
        right--;
      }
    }
  }

  return results;
}

module.exports = { threeSum };
