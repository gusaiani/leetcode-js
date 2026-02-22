/**
 * LeetCode 169. Majority Element
 * https://leetcode.com/problems/majority-element/description/
 *
 * Given an array nums of size n, return the majority element. The majority
 * element is the element that appears more than ⌊n / 2⌋ times. You may assume
 * that the majority element always exists in the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

function majorityElement(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const amount = map.get(nums[i]);
      if (amount === Math.floor(nums.length / 2)) {
        return nums[i];
      }
      map.set(nums[i], amount + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
}

module.exports = { majorityElement };
