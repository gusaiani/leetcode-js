/**
 * LeetCode 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * Given an integer array nums and an integer k, return the kth largest
 * element in the array.
 *
 * Note that it is the kth largest element in the sorted order, not the
 * kth distinct element.
 *
 * Can you solve it without sorting?
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  // We want the element at index k-1 if the array were sorted descending,
  // which is the same as index (nums.length - k) in ascending order.
  const target = nums.length - k;

  function quickselect(left, right) {
    // Partition around a pivot
    const pivot = nums[right];
    let storeIdx = left;

    for (let i = left; i < right; i++) {
      if (nums[i] <= pivot) {
        [nums[storeIdx], nums[i]] = [nums[i], nums[storeIdx]];
        storeIdx++;
      }
    }
    // Place pivot in its final position
    [nums[storeIdx], nums[right]] = [nums[right], nums[storeIdx]];

    if (storeIdx === target) return nums[storeIdx];
    if (storeIdx < target) return quickselect(storeIdx + 1, right);
    return quickselect(left, storeIdx - 1);
  }

  return quickselect(0, nums.length - 1);
}

module.exports = { findKthLargest };
