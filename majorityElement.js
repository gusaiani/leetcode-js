/**
 * LeetCode 169. Majority Element
 * https://leetcode.com/problems/majority-element/description/
 *
 * Given an array nums of size n, return the majority element. The majority
 * element is the element that appears more than ⌊n / 2⌋ times. You may assume
 * that the majority element always exists in the array.
 */

/**
 * @param {number[]}
 * @return {number}
 */

// Boyer-Moore Voting Algorithm.
const majorityElement = (nums) => {
  let candidate = null;
  let count = 0;

  for (const num of nums) {
    // If count is 0, we need a new candidate
    if (count === 0) {
      candidate = num;
    }

    // If current number matches candidate, increment.
    // Otherwise, "cancel" it out by decrementing.
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};
/*
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
*/

module.exports = { majorityElement };
