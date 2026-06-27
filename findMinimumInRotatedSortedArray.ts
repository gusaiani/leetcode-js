/**
 * LeetCode 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 *
 * Suppose an array of length n sorted in ascending order is rotated between
 * 1 and n times. Given the sorted rotated array nums of unique elements,
 * return the minimum element of this array.
 *
 * You must write an algorithm that runs in O(log n) time.
 */

function findMinimumInRotatedSortedArray(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      return nums[i];
    }
  }
  return nums[0];
}

export { findMinimumInRotatedSortedArray };
