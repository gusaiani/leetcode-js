/**
 * LeetCode 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/description/
 *
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 */

function containsDuplicate(nums: number[]): boolean {
  const counts = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    if (counts.has(nums[i])) {
      return true;
    } else {
      counts.add(nums[i]);
    }
  }

  return false;
}

export { containsDuplicate };
